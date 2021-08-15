/* eslint-disable */
// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

export interface User {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  username: string;
  email: string;
  tag: string;
  description: Maybe<string>;
  socials: Maybe<UserSocial[]>;
  stream_key: string;
  balance: number;
  overlay_settings: OverlaySetting[];
  server_metadatas: ServerMetadata[];
  variables: UserVariable[];
  banned_words: string[];
  productCount: number;
  products: Maybe<ProductConnection>;
}

export interface UserSocial {
  type: SocialType;
  url: string;
}

export enum SocialType {
  Facebook = 'FACEBOOK',
  Twitter = 'TWITTER',
  Youtube = 'YOUTUBE',
}

export interface OverlaySetting {
  color: Maybe<string>;
  duration: Maybe<string>;
  show_link: Maybe<boolean>;
  item_count: Maybe<number>;
  interval_days: Maybe<number>;
  title: Maybe<string>;
  subtitle: Maybe<string>;
  extra_message: Maybe<string>;
  running_text_type: Maybe<RunningTextType>;
  theme: Maybe<OverlayTheme>;
  separator_type: Maybe<SeparatorType>;
  speed: Maybe<Speed>;
  type: OverlayType;
}

export enum RunningTextType {
  Latest = 'LATEST',
  Top = 'TOP',
}
export enum OverlayTheme {
  Default = 'DEFAULT',
  Simple = 'SIMPLE',
  Fun = 'FUN',
  Badut = 'BADUT',
}
export enum SeparatorType {
  Dot = 'DOT',
  Icon = 'ICON',
}
export enum Speed {
  Slow = 'SLOW',
  Normal = 'NORMAL',
  Fast = 'FAST',
}
export enum OverlayType {
  Notification = 'NOTIFICATION',
  Leaderboard = 'LEADERBOARD',
  Goal = 'GOAL',
  Running_text = 'RUNNING_TEXT',
  Qr_code = 'QR_CODE',
}
export interface ServerMetadata {
  hostname: string;
  password: Maybe<string>;
  port: number;
}

export interface UserVariable {
  name: string;
  value: string;
}

/** A paginated list of Product edges. */
export interface ProductConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Product edges.*/
  edges: ProductEdge[];
}

/** Information about pagination using a Relay style cursor connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items?*/
  hasNextPage: boolean;
  /** When paginating backwards, are there more items?*/
  hasPreviousPage: boolean;
  /** The cursor to continue paginating backwards.*/
  startCursor: Maybe<string>;
  /** The cursor to continue paginating forwards.*/
  endCursor: Maybe<string>;
  /** Total number of nodes in the paginated connection.*/
  total: number;
  /** Number of nodes in the current page.*/
  count: number;
  /** Index of the current page.*/
  currentPage: number;
  /** Index of the last available page.*/
  lastPage: number;
}

/** An edge that contains a node of type Product and a cursor. */
export interface ProductEdge {
  /** The Product node.*/
  node: Product;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

export interface Product {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  pivot: Maybe<PurchaseProductPivot>;
  is_stackable: boolean;
  user: User;
  commands: Maybe<string[]>;
  price: Maybe<number>;
  user_id: string;
  description: Maybe<string>;
}

export interface PurchaseProductPivot {
  qty: Maybe<number>;
}

export interface TaxResult {
  tax: number;
}

/** A paginated list of User edges. */
export interface UserConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of User edges.*/
  edges: UserEdge[];
}

/** An edge that contains a node of type User and a cursor. */
export interface UserEdge {
  /** The User node.*/
  node: User;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
}

export interface createUser {
  name: string;
  username: string;
  password: string;
  email: string;
  tag: string;
  description?: string;
}

export interface updateUser {
  name?: string;
  username?: string;
  password?: string;
  email?: string;
  tag?: string;
  description?: string;
}

export interface createProduct {
  is_stackable: boolean;
  user_id: string;
  name: string;
  commands?: string[];
  price: number;
  description?: string;
}

export interface updateProduct {
  name?: string;
  is_stackable?: boolean;
  commands?: string[];
  price?: number;
  description?: string;
}

export interface createPurchase {
  receiver_id: string;
  anonymous_name: string;
  anonymous_email: string;
  anonymous_phone: string;
  message?: string;
  products: ProductPurchaseInput[];
}

export interface ProductPurchaseInput {
  id: string;
  qty?: number;
}

export interface PurchaseData {
  message: Maybe<string>;
  success: boolean;
  purchase: Maybe<Purchase>;
  transaction: Maybe<Transaction>;
  payment: Maybe<TripayTransactionResponse>;
}

export interface Purchase {
  id: string;
  created_at: string;
  updated_at: string;
  products: Product[];
  subtotal: Maybe<number>;
  tax: Maybe<number>;
  total: Maybe<number>;
  extra: Maybe<string>;
  anonymous_name: Maybe<string>;
  message: Maybe<string>;
  user: Maybe<User>;
  receiver: User;
  transaction: Transaction;
}

export interface Transaction {
  id: string;
  created_at: string;
  updated_at: string;
  payment_method: string;
  status: string;
  request: Maybe<string>;
  amount: Maybe<number>;
  callback: Maybe<string>;
  user: User;
}

export interface TripayTransactionResponse {
  reference: string;
  merchant_ref: string;
  payment_selection_type: string;
  payment_method: string;
  payment_name: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  amount: number;
  fee_merchant: number;
  fee_customer: number;
  total_fee: number;
  amount_received: number;
  checkout_url: string;
  status: string;
  expired_time: number;
  order_items: TripayOrderItem[];
  instructions: TripayInstruction[];
  qr_string: string;
  qr_url: string;
}

export interface TripayOrderItem {
  sku: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface TripayInstruction {
  steps: string[];
  title: string;
}

export interface login {
  email: string;
  password: string;
}

export interface LoginOutput {
  user: Maybe<User>;
  token: Maybe<string>;
  message: Maybe<string>;
}

export enum PaymentMethodEnum {
  Qris = 'QRIS',
}
export interface Game {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Photo {
  id: string;
  name: Maybe<string>;
  created_at: string;
  updated_at: string;
}

export interface Audio {
  id: string;
  name: Maybe<string>;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  name: Maybe<string>;
  created_at: string;
  updated_at: string;
}

/** The available directions for ordering a list of records. */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}
/** Allows ordering a list of records. */
export interface OrderByClause {
  /** The column that is used for ordering.*/
  column: string;
  /** The direction that is used for ordering.*/
  order: SortOrder;
}

/** Information about pagination using a fully featured paginator. */
export interface PaginatorInfo {
  /** Number of items in the current page.*/
  count: number;
  /** Index of the current page.*/
  currentPage: number;
  /** Index of the first item in the current page.*/
  firstItem: Maybe<number>;
  /** Are there more pages after this one?*/
  hasMorePages: boolean;
  /** Index of the last item in the current page.*/
  lastItem: Maybe<number>;
  /** Index of the last available page.*/
  lastPage: number;
  /** Number of items per page.*/
  perPage: number;
  /** Number of total available items.*/
  total: number;
}

/** Information about pagination using a simple paginator. */
export interface SimplePaginatorInfo {
  /** Number of items in the current page.*/
  count: number;
  /** Index of the current page.*/
  currentPage: number;
  /** Index of the first item in the current page.*/
  firstItem: Maybe<number>;
  /** Index of the last item in the current page.*/
  lastItem: Maybe<number>;
  /** Number of items per page.*/
  perPage: number;
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT',
}
export interface meArgs {}

export interface userArgs {
  id: string;
}

export interface userByUsernameArgs {
  username: string;
}

export interface productArgs {
  id?: string;
}

export interface getTaxArgs {
  price: number;
}

export interface usersArgs {
  /** Limits number of fetched items.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface productsArgs {
  user_id?: string;
  name?: string;
  /** Limits number of fetched items.*/
  first: number;
  /** A cursor after which elements are returned.*/
  after?: string;
}

export interface createUserArgs {
  input: createUser;
}

export interface updateUserArgs {
  id: string;
  input: updateUser;
}

export interface deleteUserArgs {
  id: string;
}

export interface createProductArgs {
  input: createProduct;
}

export interface updateProductArgs {
  id: string;
  input: updateProduct;
}

export interface deleteProductArgs {
  id: string;
}

export interface createPurchaseArgs {
  input: createPurchase;
}

export interface loginArgs {
  input: login;
}
