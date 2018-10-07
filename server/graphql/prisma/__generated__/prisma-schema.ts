export const typeDefs = /* GraphQL */ `type AggregateInvestment {
  count: Int!
}

type AggregateProvider {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Investment {
  id: ID!
  address: String!
  price: Float
  lease: Float
}

type InvestmentConnection {
  pageInfo: PageInfo!
  edges: [InvestmentEdge]!
  aggregate: AggregateInvestment!
}

input InvestmentCreateInput {
  address: String!
  price: Float
  lease: Float
}

type InvestmentEdge {
  node: Investment!
  cursor: String!
}

enum InvestmentOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  price_ASC
  price_DESC
  lease_ASC
  lease_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvestmentPreviousValues {
  id: ID!
  address: String!
  price: Float
  lease: Float
}

type InvestmentSubscriptionPayload {
  mutation: MutationType!
  node: Investment
  updatedFields: [String!]
  previousValues: InvestmentPreviousValues
}

input InvestmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvestmentWhereInput
  AND: [InvestmentSubscriptionWhereInput!]
  OR: [InvestmentSubscriptionWhereInput!]
  NOT: [InvestmentSubscriptionWhereInput!]
}

input InvestmentUpdateInput {
  address: String
  price: Float
  lease: Float
}

input InvestmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  lease: Float
  lease_not: Float
  lease_in: [Float!]
  lease_not_in: [Float!]
  lease_lt: Float
  lease_lte: Float
  lease_gt: Float
  lease_gte: Float
  AND: [InvestmentWhereInput!]
  OR: [InvestmentWhereInput!]
  NOT: [InvestmentWhereInput!]
}

input InvestmentWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createInvestment(data: InvestmentCreateInput!): Investment!
  updateInvestment(data: InvestmentUpdateInput!, where: InvestmentWhereUniqueInput!): Investment
  updateManyInvestments(data: InvestmentUpdateInput!, where: InvestmentWhereInput): BatchPayload!
  upsertInvestment(where: InvestmentWhereUniqueInput!, create: InvestmentCreateInput!, update: InvestmentUpdateInput!): Investment!
  deleteInvestment(where: InvestmentWhereUniqueInput!): Investment
  deleteManyInvestments(where: InvestmentWhereInput): BatchPayload!
  createProvider(data: ProviderCreateInput!): Provider!
  updateProvider(data: ProviderUpdateInput!, where: ProviderWhereUniqueInput!): Provider
  updateManyProviders(data: ProviderUpdateInput!, where: ProviderWhereInput): BatchPayload!
  upsertProvider(where: ProviderWhereUniqueInput!, create: ProviderCreateInput!, update: ProviderUpdateInput!): Provider!
  deleteProvider(where: ProviderWhereUniqueInput!): Provider
  deleteManyProviders(where: ProviderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Provider {
  id: ID!
  name: String!
}

type ProviderConnection {
  pageInfo: PageInfo!
  edges: [ProviderEdge]!
  aggregate: AggregateProvider!
}

input ProviderCreateInput {
  name: String!
}

type ProviderEdge {
  node: Provider!
  cursor: String!
}

enum ProviderOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProviderPreviousValues {
  id: ID!
  name: String!
}

type ProviderSubscriptionPayload {
  mutation: MutationType!
  node: Provider
  updatedFields: [String!]
  previousValues: ProviderPreviousValues
}

input ProviderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProviderWhereInput
  AND: [ProviderSubscriptionWhereInput!]
  OR: [ProviderSubscriptionWhereInput!]
  NOT: [ProviderSubscriptionWhereInput!]
}

input ProviderUpdateInput {
  name: String
}

input ProviderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProviderWhereInput!]
  OR: [ProviderWhereInput!]
  NOT: [ProviderWhereInput!]
}

input ProviderWhereUniqueInput {
  id: ID
}

type Query {
  investment(where: InvestmentWhereUniqueInput!): Investment
  investments(where: InvestmentWhereInput, orderBy: InvestmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Investment]!
  investmentsConnection(where: InvestmentWhereInput, orderBy: InvestmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvestmentConnection!
  provider(where: ProviderWhereUniqueInput!): Provider
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider]!
  providersConnection(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProviderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  investment(where: InvestmentSubscriptionWhereInput): InvestmentSubscriptionPayload
  provider(where: ProviderSubscriptionWhereInput): ProviderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`