// Code generated by Prisma (prisma@1.18.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  investment: (where?: InvestmentWhereInput) => Promise<boolean>;
  provider: (where?: ProviderWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  investment: (where: InvestmentWhereUniqueInput) => Investment;
  investments: (
    args?: {
      where?: InvestmentWhereInput;
      orderBy?: InvestmentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<InvestmentNode>;
  investmentsConnection: (
    args?: {
      where?: InvestmentWhereInput;
      orderBy?: InvestmentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => InvestmentConnection;
  provider: (where: ProviderWhereUniqueInput) => Provider;
  providers: (
    args?: {
      where?: ProviderWhereInput;
      orderBy?: ProviderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<ProviderNode>;
  providersConnection: (
    args?: {
      where?: ProviderWhereInput;
      orderBy?: ProviderOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProviderConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<UserNode>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createInvestment: (data: InvestmentCreateInput) => Investment;
  updateInvestment: (
    args: { data: InvestmentUpdateInput; where: InvestmentWhereUniqueInput }
  ) => Investment;
  updateManyInvestments: (
    args: { data: InvestmentUpdateInput; where?: InvestmentWhereInput }
  ) => BatchPayload;
  upsertInvestment: (
    args: {
      where: InvestmentWhereUniqueInput;
      create: InvestmentCreateInput;
      update: InvestmentUpdateInput;
    }
  ) => Investment;
  deleteInvestment: (where: InvestmentWhereUniqueInput) => Investment;
  deleteManyInvestments: (where?: InvestmentWhereInput) => BatchPayload;
  createProvider: (data: ProviderCreateInput) => Provider;
  updateProvider: (
    args: { data: ProviderUpdateInput; where: ProviderWhereUniqueInput }
  ) => Provider;
  updateManyProviders: (
    args: { data: ProviderUpdateInput; where?: ProviderWhereInput }
  ) => BatchPayload;
  upsertProvider: (
    args: {
      where: ProviderWhereUniqueInput;
      create: ProviderCreateInput;
      update: ProviderUpdateInput;
    }
  ) => Provider;
  deleteProvider: (where: ProviderWhereUniqueInput) => Provider;
  deleteManyProviders: (where?: ProviderWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  investment: (
    where?: InvestmentSubscriptionWhereInput
  ) => InvestmentSubscriptionPayloadSubscription;
  provider: (
    where?: ProviderSubscriptionWhereInput
  ) => ProviderSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type InvestmentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "address_ASC"
  | "address_DESC"
  | "price_ASC"
  | "price_DESC"
  | "lease_ASC"
  | "lease_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProviderOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type InvestmentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type ProviderWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface ProviderCreateInput {
  name: String;
  phone?: Int;
}

export interface InvestmentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
  lease?: Float;
  lease_not?: Float;
  lease_in?: Float[] | Float;
  lease_not_in?: Float[] | Float;
  lease_lt?: Float;
  lease_lte?: Float;
  lease_gt?: Float;
  lease_gte?: Float;
  AND?: InvestmentWhereInput[] | InvestmentWhereInput;
  OR?: InvestmentWhereInput[] | InvestmentWhereInput;
  NOT?: InvestmentWhereInput[] | InvestmentWhereInput;
}

export interface ProviderWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  phone?: Int;
  phone_not?: Int;
  phone_in?: Int[] | Int;
  phone_not_in?: Int[] | Int;
  phone_lt?: Int;
  phone_lte?: Int;
  phone_gt?: Int;
  phone_gte?: Int;
  AND?: ProviderWhereInput[] | ProviderWhereInput;
  OR?: ProviderWhereInput[] | ProviderWhereInput;
  NOT?: ProviderWhereInput[] | ProviderWhereInput;
}

export interface ProviderSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProviderWhereInput;
  AND?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput;
  OR?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput;
  NOT?: ProviderSubscriptionWhereInput[] | ProviderSubscriptionWhereInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface InvestmentCreateInput {
  address: String;
  price?: Float;
  lease?: Float;
}

export interface InvestmentUpdateInput {
  address?: String;
  price?: Float;
  lease?: Float;
}

export interface UserCreateInput {
  email: String;
  password: String;
}

export interface InvestmentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: InvestmentWhereInput;
  AND?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
  OR?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
  NOT?: InvestmentSubscriptionWhereInput[] | InvestmentSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface ProviderUpdateInput {
  name?: String;
  phone?: Int;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateInvestmentNode {
  count: Int;
}

export interface AggregateInvestment
  extends Promise<AggregateInvestmentNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvestmentSubscription
  extends Promise<AsyncIterator<AggregateInvestmentNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface InvestmentEdgeNode {
  cursor: String;
}

export interface InvestmentEdge
  extends Promise<InvestmentEdgeNode>,
    Fragmentable {
  node: <T = Investment>() => T;
  cursor: () => Promise<String>;
}

export interface InvestmentEdgeSubscription
  extends Promise<AsyncIterator<InvestmentEdgeNode>>,
    Fragmentable {
  node: <T = InvestmentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserNode {
  id: ID_Output;
  email: String;
  password: String;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<UserEdgeNode>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface ProviderSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ProviderSubscriptionPayload
  extends Promise<ProviderSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Provider>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProviderPreviousValues>() => T;
}

export interface ProviderSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProviderSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProviderSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProviderPreviousValuesSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProviderConnectionNode {}

export interface ProviderConnection
  extends Promise<ProviderConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<ProviderEdgeNode>>() => T;
  aggregate: <T = AggregateProvider>() => T;
}

export interface ProviderConnectionSubscription
  extends Promise<AsyncIterator<ProviderConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProviderEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProviderSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface InvestmentConnectionNode {}

export interface InvestmentConnection
  extends Promise<InvestmentConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<InvestmentEdgeNode>>() => T;
  aggregate: <T = AggregateInvestment>() => T;
}

export interface InvestmentConnectionSubscription
  extends Promise<AsyncIterator<InvestmentConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvestmentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvestmentSubscription>() => T;
}

export interface InvestmentPreviousValuesNode {
  id: ID_Output;
  address: String;
  price?: Float;
  lease?: Float;
}

export interface InvestmentPreviousValues
  extends Promise<InvestmentPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  address: () => Promise<String>;
  price: () => Promise<Float>;
  lease: () => Promise<Float>;
}

export interface InvestmentPreviousValuesSubscription
  extends Promise<AsyncIterator<InvestmentPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  address: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  lease: () => Promise<AsyncIterator<Float>>;
}

export interface InvestmentSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface InvestmentSubscriptionPayload
  extends Promise<InvestmentSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Investment>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvestmentPreviousValues>() => T;
}

export interface InvestmentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvestmentSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvestmentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvestmentPreviousValuesSubscription>() => T;
}

export interface InvestmentNode {
  id: ID_Output;
  address: String;
  price?: Float;
  lease?: Float;
}

export interface Investment extends Promise<InvestmentNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  address: () => Promise<String>;
  price: () => Promise<Float>;
  lease: () => Promise<Float>;
}

export interface InvestmentSubscription
  extends Promise<AsyncIterator<InvestmentNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  address: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  lease: () => Promise<AsyncIterator<Float>>;
}

export interface ProviderPreviousValuesNode {
  id: ID_Output;
  name: String;
  phone?: Int;
}

export interface ProviderPreviousValues
  extends Promise<ProviderPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<Int>;
}

export interface ProviderPreviousValuesSubscription
  extends Promise<AsyncIterator<ProviderPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface ProviderEdgeNode {
  cursor: String;
}

export interface ProviderEdge extends Promise<ProviderEdgeNode>, Fragmentable {
  node: <T = Provider>() => T;
  cursor: () => Promise<String>;
}

export interface ProviderEdgeSubscription
  extends Promise<AsyncIterator<ProviderEdgeNode>>,
    Fragmentable {
  node: <T = ProviderSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProviderNode {
  count: Int;
}

export interface AggregateProvider
  extends Promise<AggregateProviderNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProviderSubscription
  extends Promise<AsyncIterator<AggregateProviderNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProviderNode {
  id: ID_Output;
  name: String;
  phone?: Int;
}

export interface Provider extends Promise<ProviderNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<Int>;
}

export interface ProviderSubscription
  extends Promise<AsyncIterator<ProviderNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
export const prisma = new Prisma();
