import * as crypto from 'crypto'

const { PubSub } = require('apollo-server')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const speakeasy = require('speakeasy')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const TWO_HOUR = 2 * 60 * 60 * 1000 /* ms */
const pubsub = new PubSub()
const USER_STATE_CHANGED = 'USER_STATE_CHANGED'

export const authenticateUser = async ({ req, prisma }) => {
  const token = req.get('Authorization')

  if (!token) {
    return null
  }

  const userId = await jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decoded) => {
      const { userId } = decoded
      return userId
    }
  )
  const user = await prisma.user({
    id: userId
  })
  return user
}

export const user = {
  Query: {
    user(root, args, ctx) {
      const { user } = ctx
      return {
        id: user.id,
        email: user.email,
        has_two_factor: user.has_two_factor,
        is_admin: user.is_admin
      }
    }
  },
  Mutation: {
    test() {
      console.log('test')
    },
    async createUser(root, args, ctx) {
      const userCheck = await ctx.prisma.user({
        email: args.email
      })
      console.log(userCheck)
      if (userCheck) {
        throw new Error(`This email already exists: ${args.email}`)
      }

      const password = await bcrypt.hash(args.password, 10)
      const user = await ctx.prisma.createUser({
        email: args.email,
        password,
        firstname: args.firstname,
        lastname: args.lastname
      })
      return {
        token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
        user
      }
    },
    async loginUser(root, { email, password, code }, ctx, info) {
      const user = await ctx.prisma.user({
        email
      })
      if (!user) {
        throw new Error(`No such user found for email: ${email}`)
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        throw new Error('Invalid password')
      }

      /**
       * Extra check for 2 factor
       */
      if (user.has_two_factor) {
        console.log('has', code, password)
        const verified = speakeasy.totp.verify({
          secret: user.qr_secret,
          encoding: 'base32',
          token: code
        })

        if (!verified) {
          throw new Error('Invalid 2FA code')
        }
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

      return {
        token,
        user
      }
    },
    async requestResetPassword(root, { email }, ctx) {
      /**
       * 1. Find user
       */
      const user = await ctx.prisma.user({
        email
      })
      if (!user) {
        throw new Error(`No such user found for email: ${email}`)
      }
      console.log(user)

      /**
       * 2. Create token
       */
      const token = crypto.randomBytes(20).toString('hex')

      /**
       * 3. Update user's token in DB
       */
      await ctx.prisma.updateUser({
        where: {
          email
        },
        data: {
          reset_token: token
        }
      })

      /**
       * 4. Send email
       */
      const msg = {
        to: email,
        from: 'no-reply@oosre.com',
        subject: 'WBIT Password Reset',
        html: `Reset your password using the following URL <a href="http://localhost:4200/reset-password?token=${token}">Reset Password</a>\n Link expires in 2 hours`
      }

      /**
       * 5. Add token expiration time
       */
      const current_time = new Date()
      await ctx.prisma.updateUser({
        where: {
          email
        },
        data: {
          time_stamp: current_time
        }
      })

      sgMail.send(msg)
      return true
    },
    async resetPassword(root, { token, password }, ctx) {
      /**
       * 1. Check if token matches a user
       */
      const user = await ctx.prisma.user({
        reset_token: token
      })

      if (!user) {
        throw new Error(`The token is invalid please request another one`)
      }

      /**
       * 2. Check if token has not yet expired
       */
      const token_creation_time = Date.parse(user.time_stamp)
      const curr_time = Date.parse(new Date().toString())
      console.log(curr_time - token_creation_time)
      if (curr_time - token_creation_time > TWO_HOUR) {
        throw new Error(`The token has expired please request another one`)
      }

      /**
       * 3. Update password
       */
      const new_password = await bcrypt.hash(password, 10)

      await ctx.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          reset_token: null,
          time_stamp: null,
          password: new_password
        }
      })

      return true
    },
    async updateUser(root, { data, where }, ctx) {
      console.log(data, where)
      return await ctx.prisma.updateUser({
        where,
        data
      })
    },
    async generateQRCode(root, {}, ctx) {
      const { user } = ctx
      const QRCode = require('qrcode')
      const secret = speakeasy.generateSecret({ length: 20 })

      var url = speakeasy.otpauthURL({
        secret: secret.ascii,
        label: 'WBIT'
      })

      await ctx.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          qr_secret: secret.base32
        }
      })

      return QRCode.toDataURL(url)
    },
    async verify2faCode(root, { code }, ctx) {
      const { user } = ctx

      const currentUser = await ctx.prisma.user({
        id: user.id
      })

      // Verify code
      const verified = speakeasy.totp.verify({
        secret: currentUser.qr_secret,
        encoding: 'base32',
        token: code
      })

      if (!verified) return false

      // Enable 2FA for user
      await ctx.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          has_two_factor: true
        }
      })

      return verified
    }
  }
}
