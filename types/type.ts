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
  profilepicture: Maybe<Picture>;
  banner: Maybe<Picture>;
  subathon_time_end: string;
  is_admin: boolean;
  is_active: boolean;
  products: Maybe<ProductConnection>;
  transactions: Maybe<TransactionConnection>;
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
  value: Maybe<string>;
}

export interface Picture {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  cid: Maybe<string>;
  original_size: number;
  compressed_size: number;
  real_path: string;
  path: string;
  roles: Maybe<PictureRole>;
}

export enum PictureRole {
  Profile_picture = 'PROFILE_PICTURE',
  Banner = 'BANNER',
  Cover = 'COVER',
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
  subathon_time: number;
  price: Maybe<number>;
  user_id: string;
  description: Maybe<string>;
  cover: Maybe<Picture>;
}

export interface PurchaseProductPivot {
  qty: Maybe<number>;
}

/** A paginated list of Transaction edges. */
export interface TransactionConnection {
  /** Pagination information about the list of edges.*/
  pageInfo: PageInfo;
  /** A list of Transaction edges.*/
  edges: TransactionEdge[];
}

/** An edge that contains a node of type Transaction and a cursor. */
export interface TransactionEdge {
  /** The Transaction node.*/
  node: Transaction;
  /** A unique cursor that can be used for pagination.*/
  cursor: string;
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
  purchase: Purchase;
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
  tag?: string;
  description?: string;
  subathon_time_end?: string;
}

export interface PictureAssignInput {
  id: string;
}

export interface UserVariableInput {
  name: string;
  value: string;
}

export interface createProduct {
  is_stackable?: boolean;
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
  subathon_time?: number;
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
  payment: Maybe<MidtransRequestOutput>;
}

export interface MidtransRequestOutput {
  token: string;
  redirect_url: string;
  uuid: string;
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

export interface InvitationOutput {
  status: boolean;
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

export interface OyRequestTransactionResponse {
  payment_link_id: string;
  message: string;
  email_status: string;
  url: string;
  status: boolean;
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

export interface query_invitationArgs {
  username: string;
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

export interface update_user_pictureArgs {
  id: string;
  profilepicture?: PictureAssignInput;
  banner?: PictureAssignInput;
}

export interface update_user_customArgs {
  id: string;
  variables: UserVariableInput[];
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

export interface update_product_pictureArgs {
  id: string;
  cover?: PictureAssignInput;
}

export interface createPurchaseArgs {
  input: createPurchase;
}

export interface loginArgs {
  input: login;
}

export interface upload_pictureArgs {
  file: File;
}

export interface send_invitationArgs {
  email: string;
}

export interface activate_invitationArgs {
  uuid: string;
  input: updateUser;
}

export interface userUpdatedArgs {
  id: string;
}
