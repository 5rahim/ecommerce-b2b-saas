import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  numeric: any;
  timestamp: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "store_subscriptions" */
  delete_store_subscriptions?: Maybe<Store_Subscriptions_Mutation_Response>;
  /** delete single row from the table: "store_subscriptions" */
  delete_store_subscriptions_by_pk?: Maybe<Store_Subscriptions>;
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>;
  /** delete single row from the table: "stores" */
  delete_stores_by_pk?: Maybe<Stores>;
  /** delete data from the table: "subscriptions" */
  delete_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** delete single row from the table: "subscriptions" */
  delete_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "store_subscriptions" */
  insert_store_subscriptions?: Maybe<Store_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "store_subscriptions" */
  insert_store_subscriptions_one?: Maybe<Store_Subscriptions>;
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>;
  /** insert a single row into the table: "stores" */
  insert_stores_one?: Maybe<Stores>;
  /** insert data into the table: "subscriptions" */
  insert_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "subscriptions" */
  insert_subscriptions_one?: Maybe<Subscriptions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "store_subscriptions" */
  update_store_subscriptions?: Maybe<Store_Subscriptions_Mutation_Response>;
  /** update single row of the table: "store_subscriptions" */
  update_store_subscriptions_by_pk?: Maybe<Store_Subscriptions>;
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>;
  /** update single row of the table: "stores" */
  update_stores_by_pk?: Maybe<Stores>;
  /** update data of the table: "subscriptions" */
  update_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** update single row of the table: "subscriptions" */
  update_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Store_SubscriptionsArgs = {
  where: Store_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stores_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SubscriptionsArgs = {
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_SubscriptionsArgs = {
  objects: Array<Store_Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Store_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_Subscriptions_OneArgs = {
  object: Store_Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Store_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>;
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stores_OneArgs = {
  object: Stores_Insert_Input;
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscriptionsArgs = {
  objects: Array<Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscriptions_OneArgs = {
  object: Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_SubscriptionsArgs = {
  _inc?: InputMaybe<Store_Subscriptions_Inc_Input>;
  _set?: InputMaybe<Store_Subscriptions_Set_Input>;
  where: Store_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_Subscriptions_By_PkArgs = {
  _inc?: InputMaybe<Store_Subscriptions_Inc_Input>;
  _set?: InputMaybe<Store_Subscriptions_Set_Input>;
  pk_columns: Store_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _append?: InputMaybe<Stores_Append_Input>;
  _delete_at_path?: InputMaybe<Stores_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Stores_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Stores_Delete_Key_Input>;
  _prepend?: InputMaybe<Stores_Prepend_Input>;
  _set?: InputMaybe<Stores_Set_Input>;
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stores_By_PkArgs = {
  _append?: InputMaybe<Stores_Append_Input>;
  _delete_at_path?: InputMaybe<Stores_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Stores_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Stores_Delete_Key_Input>;
  _prepend?: InputMaybe<Stores_Prepend_Input>;
  _set?: InputMaybe<Stores_Set_Input>;
  pk_columns: Stores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubscriptionsArgs = {
  _append?: InputMaybe<Subscriptions_Append_Input>;
  _delete_at_path?: InputMaybe<Subscriptions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Subscriptions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Subscriptions_Delete_Key_Input>;
  _prepend?: InputMaybe<Subscriptions_Prepend_Input>;
  _set?: InputMaybe<Subscriptions_Set_Input>;
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscriptions_By_PkArgs = {
  _append?: InputMaybe<Subscriptions_Append_Input>;
  _delete_at_path?: InputMaybe<Subscriptions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Subscriptions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Subscriptions_Delete_Key_Input>;
  _prepend?: InputMaybe<Subscriptions_Prepend_Input>;
  _set?: InputMaybe<Subscriptions_Set_Input>;
  pk_columns: Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  id: Scalars['uuid'];
  text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "store_subscriptions" */
  store_subscriptions: Array<Store_Subscriptions>;
  /** fetch aggregated fields from the table: "store_subscriptions" */
  store_subscriptions_aggregate: Store_Subscriptions_Aggregate;
  /** fetch data from the table: "store_subscriptions" using primary key columns */
  store_subscriptions_by_pk?: Maybe<Store_Subscriptions>;
  /** An array relationship */
  stores: Array<Stores>;
  /** An aggregate relationship */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStore_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Store_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Subscriptions_Order_By>>;
  where?: InputMaybe<Store_Subscriptions_Bool_Exp>;
};


export type Query_RootStore_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Store_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Subscriptions_Order_By>>;
  where?: InputMaybe<Store_Subscriptions_Bool_Exp>;
};


export type Query_RootStore_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStoresArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Query_RootStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Query_RootStores_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "store_subscriptions" */
export type Store_Subscriptions = {
  __typename?: 'store_subscriptions';
  cancel_at?: Maybe<Scalars['timestamp']>;
  cancel_at_period_end?: Maybe<Scalars['timestamp']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_period_end?: Maybe<Scalars['timestamp']>;
  current_period_start?: Maybe<Scalars['timestamp']>;
  ended_at?: Maybe<Scalars['timestamp']>;
  id: Scalars['uuid'];
  price_id: Scalars['String'];
  quantity: Scalars['numeric'];
  status: Scalars['String'];
  /** An object relationship */
  store?: Maybe<Stores>;
  store_id: Scalars['uuid'];
  /** An object relationship */
  subscription?: Maybe<Subscriptions>;
  subscription_id: Scalars['uuid'];
};

/** aggregated selection of "store_subscriptions" */
export type Store_Subscriptions_Aggregate = {
  __typename?: 'store_subscriptions_aggregate';
  aggregate?: Maybe<Store_Subscriptions_Aggregate_Fields>;
  nodes: Array<Store_Subscriptions>;
};

/** aggregate fields of "store_subscriptions" */
export type Store_Subscriptions_Aggregate_Fields = {
  __typename?: 'store_subscriptions_aggregate_fields';
  avg?: Maybe<Store_Subscriptions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Store_Subscriptions_Max_Fields>;
  min?: Maybe<Store_Subscriptions_Min_Fields>;
  stddev?: Maybe<Store_Subscriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Subscriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Subscriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Subscriptions_Sum_Fields>;
  var_pop?: Maybe<Store_Subscriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Subscriptions_Var_Samp_Fields>;
  variance?: Maybe<Store_Subscriptions_Variance_Fields>;
};


/** aggregate fields of "store_subscriptions" */
export type Store_Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Store_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Store_Subscriptions_Avg_Fields = {
  __typename?: 'store_subscriptions_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "store_subscriptions". All fields are combined with a logical 'AND'. */
export type Store_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Store_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Store_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Store_Subscriptions_Bool_Exp>>;
  cancel_at?: InputMaybe<Timestamp_Comparison_Exp>;
  cancel_at_period_end?: InputMaybe<Timestamp_Comparison_Exp>;
  canceled_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_period_end?: InputMaybe<Timestamp_Comparison_Exp>;
  current_period_start?: InputMaybe<Timestamp_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  store?: InputMaybe<Stores_Bool_Exp>;
  store_id?: InputMaybe<Uuid_Comparison_Exp>;
  subscription?: InputMaybe<Subscriptions_Bool_Exp>;
  subscription_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "store_subscriptions" */
export enum Store_Subscriptions_Constraint {
  /** unique or primary key constraint */
  StoreSubscriptionsPkey = 'store_subscriptions_pkey'
}

/** input type for incrementing numeric columns in table "store_subscriptions" */
export type Store_Subscriptions_Inc_Input = {
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "store_subscriptions" */
export type Store_Subscriptions_Insert_Input = {
  cancel_at?: InputMaybe<Scalars['timestamp']>;
  cancel_at_period_end?: InputMaybe<Scalars['timestamp']>;
  canceled_at?: InputMaybe<Scalars['timestamp']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  current_period_end?: InputMaybe<Scalars['timestamp']>;
  current_period_start?: InputMaybe<Scalars['timestamp']>;
  ended_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  price_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<Stores_Obj_Rel_Insert_Input>;
  store_id?: InputMaybe<Scalars['uuid']>;
  subscription?: InputMaybe<Subscriptions_Obj_Rel_Insert_Input>;
  subscription_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Store_Subscriptions_Max_Fields = {
  __typename?: 'store_subscriptions_max_fields';
  cancel_at?: Maybe<Scalars['timestamp']>;
  cancel_at_period_end?: Maybe<Scalars['timestamp']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_period_end?: Maybe<Scalars['timestamp']>;
  current_period_start?: Maybe<Scalars['timestamp']>;
  ended_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  subscription_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Store_Subscriptions_Min_Fields = {
  __typename?: 'store_subscriptions_min_fields';
  cancel_at?: Maybe<Scalars['timestamp']>;
  cancel_at_period_end?: Maybe<Scalars['timestamp']>;
  canceled_at?: Maybe<Scalars['timestamp']>;
  created_at?: Maybe<Scalars['timestamp']>;
  current_period_end?: Maybe<Scalars['timestamp']>;
  current_period_start?: Maybe<Scalars['timestamp']>;
  ended_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  price_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['String']>;
  store_id?: Maybe<Scalars['uuid']>;
  subscription_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "store_subscriptions" */
export type Store_Subscriptions_Mutation_Response = {
  __typename?: 'store_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store_Subscriptions>;
};

/** input type for inserting object relation for remote table "store_subscriptions" */
export type Store_Subscriptions_Obj_Rel_Insert_Input = {
  data: Store_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Store_Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "store_subscriptions" */
export type Store_Subscriptions_On_Conflict = {
  constraint: Store_Subscriptions_Constraint;
  update_columns?: Array<Store_Subscriptions_Update_Column>;
  where?: InputMaybe<Store_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "store_subscriptions". */
export type Store_Subscriptions_Order_By = {
  cancel_at?: InputMaybe<Order_By>;
  cancel_at_period_end?: InputMaybe<Order_By>;
  canceled_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_period_end?: InputMaybe<Order_By>;
  current_period_start?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  store?: InputMaybe<Stores_Order_By>;
  store_id?: InputMaybe<Order_By>;
  subscription?: InputMaybe<Subscriptions_Order_By>;
  subscription_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: store_subscriptions */
export type Store_Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "store_subscriptions" */
export enum Store_Subscriptions_Select_Column {
  /** column name */
  CancelAt = 'cancel_at',
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubscriptionId = 'subscription_id'
}

/** input type for updating data in table "store_subscriptions" */
export type Store_Subscriptions_Set_Input = {
  cancel_at?: InputMaybe<Scalars['timestamp']>;
  cancel_at_period_end?: InputMaybe<Scalars['timestamp']>;
  canceled_at?: InputMaybe<Scalars['timestamp']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  current_period_end?: InputMaybe<Scalars['timestamp']>;
  current_period_start?: InputMaybe<Scalars['timestamp']>;
  ended_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  price_id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Scalars['String']>;
  store_id?: InputMaybe<Scalars['uuid']>;
  subscription_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Store_Subscriptions_Stddev_Fields = {
  __typename?: 'store_subscriptions_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Store_Subscriptions_Stddev_Pop_Fields = {
  __typename?: 'store_subscriptions_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Store_Subscriptions_Stddev_Samp_Fields = {
  __typename?: 'store_subscriptions_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Store_Subscriptions_Sum_Fields = {
  __typename?: 'store_subscriptions_sum_fields';
  quantity?: Maybe<Scalars['numeric']>;
};

/** update columns of table "store_subscriptions" */
export enum Store_Subscriptions_Update_Column {
  /** column name */
  CancelAt = 'cancel_at',
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CanceledAt = 'canceled_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentPeriodEnd = 'current_period_end',
  /** column name */
  CurrentPeriodStart = 'current_period_start',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  Id = 'id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Status = 'status',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  SubscriptionId = 'subscription_id'
}

/** aggregate var_pop on columns */
export type Store_Subscriptions_Var_Pop_Fields = {
  __typename?: 'store_subscriptions_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Store_Subscriptions_Var_Samp_Fields = {
  __typename?: 'store_subscriptions_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Store_Subscriptions_Variance_Fields = {
  __typename?: 'store_subscriptions_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "stores" */
export type Stores = {
  __typename?: 'stores';
  address: Scalars['String'];
  category: Scalars['String'];
  country: Scalars['String'];
  created_at: Scalars['timestamp'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone: Scalars['String'];
  settings?: Maybe<Scalars['jsonb']>;
  sid: Scalars['String'];
  /** An object relationship */
  store_subscription?: Maybe<Store_Subscriptions>;
  store_subscription_id: Scalars['uuid'];
  theme: Scalars['jsonb'];
  trial_ends: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "stores" */
export type StoresSettingsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "stores" */
export type StoresThemeArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
  __typename?: 'stores_aggregate';
  aggregate?: Maybe<Stores_Aggregate_Fields>;
  nodes: Array<Stores>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
  __typename?: 'stores_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stores_Max_Fields>;
  min?: Maybe<Stores_Min_Fields>;
};


/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stores" */
export type Stores_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stores_Max_Order_By>;
  min?: InputMaybe<Stores_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Stores_Append_Input = {
  settings?: InputMaybe<Scalars['jsonb']>;
  theme?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "stores" */
export type Stores_Arr_Rel_Insert_Input = {
  data: Array<Stores_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: InputMaybe<Array<Stores_Bool_Exp>>;
  _not?: InputMaybe<Stores_Bool_Exp>;
  _or?: InputMaybe<Array<Stores_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  settings?: InputMaybe<Jsonb_Comparison_Exp>;
  sid?: InputMaybe<String_Comparison_Exp>;
  store_subscription?: InputMaybe<Store_Subscriptions_Bool_Exp>;
  store_subscription_id?: InputMaybe<Uuid_Comparison_Exp>;
  theme?: InputMaybe<Jsonb_Comparison_Exp>;
  trial_ends?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey',
  /** unique or primary key constraint */
  StoresSidKey = 'stores_sid_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Stores_Delete_At_Path_Input = {
  settings?: InputMaybe<Array<Scalars['String']>>;
  theme?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Stores_Delete_Elem_Input = {
  settings?: InputMaybe<Scalars['Int']>;
  theme?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Stores_Delete_Key_Input = {
  settings?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<Scalars['jsonb']>;
  sid?: InputMaybe<Scalars['String']>;
  store_subscription?: InputMaybe<Store_Subscriptions_Obj_Rel_Insert_Input>;
  store_subscription_id?: InputMaybe<Scalars['uuid']>;
  theme?: InputMaybe<Scalars['jsonb']>;
  trial_ends?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
  store_subscription_id?: Maybe<Scalars['uuid']>;
  trial_ends?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stores" */
export type Stores_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  sid?: InputMaybe<Order_By>;
  store_subscription_id?: InputMaybe<Order_By>;
  trial_ends?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
  store_subscription_id?: Maybe<Scalars['uuid']>;
  trial_ends?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stores" */
export type Stores_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  sid?: InputMaybe<Order_By>;
  store_subscription_id?: InputMaybe<Order_By>;
  trial_ends?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
  __typename?: 'stores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stores>;
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stores_On_Conflict>;
};

/** on_conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint;
  update_columns?: Array<Stores_Update_Column>;
  where?: InputMaybe<Stores_Bool_Exp>;
};

/** Ordering options when selecting data from "stores". */
export type Stores_Order_By = {
  address?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  settings?: InputMaybe<Order_By>;
  sid?: InputMaybe<Order_By>;
  store_subscription?: InputMaybe<Store_Subscriptions_Order_By>;
  store_subscription_id?: InputMaybe<Order_By>;
  theme?: InputMaybe<Order_By>;
  trial_ends?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stores */
export type Stores_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Stores_Prepend_Input = {
  settings?: InputMaybe<Scalars['jsonb']>;
  theme?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Category = 'category',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Settings = 'settings',
  /** column name */
  Sid = 'sid',
  /** column name */
  StoreSubscriptionId = 'store_subscription_id',
  /** column name */
  Theme = 'theme',
  /** column name */
  TrialEnds = 'trial_ends',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<Scalars['jsonb']>;
  sid?: InputMaybe<Scalars['String']>;
  store_subscription_id?: InputMaybe<Scalars['uuid']>;
  theme?: InputMaybe<Scalars['jsonb']>;
  trial_ends?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Category = 'category',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Settings = 'settings',
  /** column name */
  Sid = 'sid',
  /** column name */
  StoreSubscriptionId = 'store_subscription_id',
  /** column name */
  Theme = 'theme',
  /** column name */
  TrialEnds = 'trial_ends',
  /** column name */
  UserId = 'user_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "store_subscriptions" */
  store_subscriptions: Array<Store_Subscriptions>;
  /** fetch aggregated fields from the table: "store_subscriptions" */
  store_subscriptions_aggregate: Store_Subscriptions_Aggregate;
  /** fetch data from the table: "store_subscriptions" using primary key columns */
  store_subscriptions_by_pk?: Maybe<Store_Subscriptions>;
  /** An array relationship */
  stores: Array<Stores>;
  /** An aggregate relationship */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStore_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Store_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Subscriptions_Order_By>>;
  where?: InputMaybe<Store_Subscriptions_Bool_Exp>;
};


export type Subscription_RootStore_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Store_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Subscriptions_Order_By>>;
  where?: InputMaybe<Store_Subscriptions_Bool_Exp>;
};


export type Subscription_RootStore_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStoresArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


export type Subscription_RootStores_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "subscriptions" */
export type Subscriptions = {
  __typename?: 'subscriptions';
  id: Scalars['uuid'];
  name: Scalars['String'];
  scopes?: Maybe<Scalars['jsonb']>;
  stripe_id: Scalars['String'];
};


/** columns and relationships of "subscriptions" */
export type SubscriptionsScopesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "subscriptions" */
export type Subscriptions_Aggregate = {
  __typename?: 'subscriptions_aggregate';
  aggregate?: Maybe<Subscriptions_Aggregate_Fields>;
  nodes: Array<Subscriptions>;
};

/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_Fields = {
  __typename?: 'subscriptions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Subscriptions_Max_Fields>;
  min?: Maybe<Subscriptions_Min_Fields>;
};


/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Subscriptions_Append_Input = {
  scopes?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "subscriptions". All fields are combined with a logical 'AND'. */
export type Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  scopes?: InputMaybe<Jsonb_Comparison_Exp>;
  stripe_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscriptions" */
export enum Subscriptions_Constraint {
  /** unique or primary key constraint */
  SubscriptionsPkey = 'subscriptions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Subscriptions_Delete_At_Path_Input = {
  scopes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Subscriptions_Delete_Elem_Input = {
  scopes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Subscriptions_Delete_Key_Input = {
  scopes?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "subscriptions" */
export type Subscriptions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Scalars['jsonb']>;
  stripe_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Subscriptions_Max_Fields = {
  __typename?: 'subscriptions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Subscriptions_Min_Fields = {
  __typename?: 'subscriptions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  stripe_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "subscriptions" */
export type Subscriptions_Mutation_Response = {
  __typename?: 'subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscriptions>;
};

/** input type for inserting object relation for remote table "subscriptions" */
export type Subscriptions_Obj_Rel_Insert_Input = {
  data: Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "subscriptions" */
export type Subscriptions_On_Conflict = {
  constraint: Subscriptions_Constraint;
  update_columns?: Array<Subscriptions_Update_Column>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "subscriptions". */
export type Subscriptions_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  scopes?: InputMaybe<Order_By>;
  stripe_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscriptions */
export type Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Subscriptions_Prepend_Input = {
  scopes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Scopes = 'scopes',
  /** column name */
  StripeId = 'stripe_id'
}

/** input type for updating data in table "subscriptions" */
export type Subscriptions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Scalars['jsonb']>;
  stripe_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "subscriptions" */
export enum Subscriptions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Scopes = 'scopes',
  /** column name */
  StripeId = 'stripe_id'
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  phone?: Maybe<Scalars['numeric']>;
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  stores: Array<Stores>;
  /** An aggregate relationship */
  stores_aggregate: Stores_Aggregate;
  user_id: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersStoresArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stores_Order_By>>;
  where?: InputMaybe<Stores_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<Numeric_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  stores?: InputMaybe<Stores_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  phone?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['numeric']>;
  picture?: InputMaybe<Scalars['String']>;
  stores?: InputMaybe<Stores_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['numeric']>;
  picture?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['numeric']>;
  picture?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  stores_aggregate?: InputMaybe<Stores_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Picture = 'picture',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['numeric']>;
  picture?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  phone?: Maybe<Scalars['numeric']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Picture = 'picture',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetStoreQueryVariables = Exact<{
  sid: Scalars['String'];
}>;


export type GetStoreQuery = { __typename?: 'query_root', stores: Array<{ __typename?: 'stores', address: string, category: string, country: string, created_at: any, id: any, name: string, phone: string, sid: string, store_subscription_id: any, theme: any, trial_ends: any, user_id: any, settings?: any | null, user?: { __typename?: 'users', id: any, user_id: string, first_name: string, last_name: string, phone?: any | null, picture?: string | null } | null, store_subscription?: { __typename?: 'store_subscriptions', status: string, subscription?: { __typename?: 'subscriptions', id: any } | null } | null }> };

export type GetUserByUserIdQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserByUserIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', created_at?: any | null, email: string, first_name: string, id: any, last_name: string, phone?: any | null, picture?: string | null, user_id: string, stores: Array<{ __typename?: 'stores', id: any, sid: string, name: string }> }> };

export type PostsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type PostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: any, text?: string | null }> };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: any, text?: string | null }> };

export type GetStoreCountBySidQueryVariables = Exact<{
  sid: Scalars['String'];
}>;


export type GetStoreCountBySidQuery = { __typename?: 'query_root', stores_aggregate: { __typename?: 'stores_aggregate', aggregate?: { __typename?: 'stores_aggregate_fields', count: number } | null } };

export type CreateStoreMutationVariables = Exact<{
  store_id: Scalars['uuid'];
  store_subscription_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
  name: Scalars['String'];
  sid: Scalars['String'];
  category: Scalars['String'];
  country: Scalars['String'];
  phone: Scalars['String'];
  address: Scalars['String'];
  theme: Scalars['jsonb'];
  trial_ends: Scalars['timestamp'];
  subscription_id: Scalars['uuid'];
  created_at: Scalars['timestamp'];
  status: Scalars['String'];
  price_id: Scalars['String'];
  quantity: Scalars['numeric'];
}>;


export type CreateStoreMutation = { __typename?: 'mutation_root', insert_stores_one?: { __typename?: 'stores', id: any, sid: string } | null, insert_store_subscriptions_one?: { __typename?: 'store_subscriptions', id: any } | null };

export type UpdateStoreNameMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
}>;


export type UpdateStoreNameMutation = { __typename?: 'mutation_root', update_stores_by_pk?: { __typename?: 'stores', id: any } | null };

export type UpdateStoreCategoryMutationVariables = Exact<{
  id: Scalars['uuid'];
  category: Scalars['String'];
}>;


export type UpdateStoreCategoryMutation = { __typename?: 'mutation_root', update_stores_by_pk?: { __typename?: 'stores', id: any } | null };

export type UpdateStoreAddressMutationVariables = Exact<{
  id: Scalars['uuid'];
  address: Scalars['String'];
}>;


export type UpdateStoreAddressMutation = { __typename?: 'mutation_root', update_stores_by_pk?: { __typename?: 'stores', id: any } | null };

export type UpdateStoreSettingsMutationVariables = Exact<{
  id: Scalars['uuid'];
  settings: Scalars['jsonb'];
}>;


export type UpdateStoreSettingsMutation = { __typename?: 'mutation_root', update_stores_by_pk?: { __typename?: 'stores', id: any } | null };

export type UpdateUserProfilePictureMutationVariables = Exact<{
  id: Scalars['uuid'];
  picture: Scalars['String'];
}>;


export type UpdateUserProfilePictureMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type UpdateNamesMutationVariables = Exact<{
  id: Scalars['uuid'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateNamesMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };


export const GetStoreDocument = gql`
    query GetStore($sid: String!) {
  stores(limit: 1, where: {sid: {_eq: $sid}}) {
    address
    category
    country
    created_at
    id
    name
    phone
    sid
    store_subscription_id
    theme
    trial_ends
    user_id
    settings
    user {
      id
      user_id
      user_id
      first_name
      last_name
      phone
      picture
    }
    store_subscription {
      status
      subscription {
        id
      }
    }
  }
}
    `;

/**
 * __useGetStoreQuery__
 *
 * To run a query within a React component, call `useGetStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreQuery({
 *   variables: {
 *      sid: // value for 'sid'
 *   },
 * });
 */
export function useGetStoreQuery(baseOptions: Apollo.QueryHookOptions<GetStoreQuery, GetStoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoreQuery, GetStoreQueryVariables>(GetStoreDocument, options);
      }
export function useGetStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreQuery, GetStoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoreQuery, GetStoreQueryVariables>(GetStoreDocument, options);
        }
export type GetStoreQueryHookResult = ReturnType<typeof useGetStoreQuery>;
export type GetStoreLazyQueryHookResult = ReturnType<typeof useGetStoreLazyQuery>;
export type GetStoreQueryResult = Apollo.QueryResult<GetStoreQuery, GetStoreQueryVariables>;
export const GetUserByUserIdDocument = gql`
    query GetUserByUserID($user_id: String!) {
  users(where: {user_id: {_eq: $user_id}}) {
    created_at
    email
    first_name
    id
    last_name
    phone
    picture
    user_id
    stores {
      id
      sid
      name
    }
  }
}
    `;

/**
 * __useGetUserByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>(GetUserByUserIdDocument, options);
      }
export function useGetUserByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>(GetUserByUserIdDocument, options);
        }
export type GetUserByUserIdQueryHookResult = ReturnType<typeof useGetUserByUserIdQuery>;
export type GetUserByUserIdLazyQueryHookResult = ReturnType<typeof useGetUserByUserIdLazyQuery>;
export type GetUserByUserIdQueryResult = Apollo.QueryResult<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>;
export const PostsDocument = gql`
    query posts($id: uuid!) {
  posts(where: {id: {_eq: $id}}) {
    id
    text
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  posts {
    id
    text
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetStoreCountBySidDocument = gql`
    query GetStoreCountBySID($sid: String!) {
  stores_aggregate(where: {sid: {_eq: $sid}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetStoreCountBySidQuery__
 *
 * To run a query within a React component, call `useGetStoreCountBySidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreCountBySidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreCountBySidQuery({
 *   variables: {
 *      sid: // value for 'sid'
 *   },
 * });
 */
export function useGetStoreCountBySidQuery(baseOptions: Apollo.QueryHookOptions<GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables>(GetStoreCountBySidDocument, options);
      }
export function useGetStoreCountBySidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables>(GetStoreCountBySidDocument, options);
        }
export type GetStoreCountBySidQueryHookResult = ReturnType<typeof useGetStoreCountBySidQuery>;
export type GetStoreCountBySidLazyQueryHookResult = ReturnType<typeof useGetStoreCountBySidLazyQuery>;
export type GetStoreCountBySidQueryResult = Apollo.QueryResult<GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables>;
export const CreateStoreDocument = gql`
    mutation CreateStore($store_id: uuid!, $store_subscription_id: uuid!, $user_id: uuid!, $name: String!, $sid: String!, $category: String!, $country: String!, $phone: String!, $address: String!, $theme: jsonb!, $trial_ends: timestamp!, $subscription_id: uuid!, $created_at: timestamp!, $status: String!, $price_id: String!, $quantity: numeric!) {
  insert_stores_one(
    object: {id: $store_id, store_subscription_id: $store_subscription_id, user_id: $user_id, name: $name, sid: $sid, category: $category, country: $country, phone: $phone, address: $address, theme: $theme, trial_ends: $trial_ends}
  ) {
    id
    sid
  }
  insert_store_subscriptions_one(
    object: {id: $store_subscription_id, store_id: $store_id, subscription_id: $subscription_id, created_at: $created_at, status: $status, price_id: $price_id, quantity: $quantity}
  ) {
    id
  }
}
    `;
export type CreateStoreMutationFn = Apollo.MutationFunction<CreateStoreMutation, CreateStoreMutationVariables>;

/**
 * __useCreateStoreMutation__
 *
 * To run a mutation, you first call `useCreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoreMutation, { data, loading, error }] = useCreateStoreMutation({
 *   variables: {
 *      store_id: // value for 'store_id'
 *      store_subscription_id: // value for 'store_subscription_id'
 *      user_id: // value for 'user_id'
 *      name: // value for 'name'
 *      sid: // value for 'sid'
 *      category: // value for 'category'
 *      country: // value for 'country'
 *      phone: // value for 'phone'
 *      address: // value for 'address'
 *      theme: // value for 'theme'
 *      trial_ends: // value for 'trial_ends'
 *      subscription_id: // value for 'subscription_id'
 *      created_at: // value for 'created_at'
 *      status: // value for 'status'
 *      price_id: // value for 'price_id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useCreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoreMutation, CreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoreMutation, CreateStoreMutationVariables>(CreateStoreDocument, options);
      }
export type CreateStoreMutationHookResult = ReturnType<typeof useCreateStoreMutation>;
export type CreateStoreMutationResult = Apollo.MutationResult<CreateStoreMutation>;
export type CreateStoreMutationOptions = Apollo.BaseMutationOptions<CreateStoreMutation, CreateStoreMutationVariables>;
export const UpdateStoreNameDocument = gql`
    mutation UpdateStoreName($id: uuid!, $name: String!) {
  update_stores_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
  }
}
    `;
export type UpdateStoreNameMutationFn = Apollo.MutationFunction<UpdateStoreNameMutation, UpdateStoreNameMutationVariables>;

/**
 * __useUpdateStoreNameMutation__
 *
 * To run a mutation, you first call `useUpdateStoreNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoreNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoreNameMutation, { data, loading, error }] = useUpdateStoreNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateStoreNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoreNameMutation, UpdateStoreNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoreNameMutation, UpdateStoreNameMutationVariables>(UpdateStoreNameDocument, options);
      }
export type UpdateStoreNameMutationHookResult = ReturnType<typeof useUpdateStoreNameMutation>;
export type UpdateStoreNameMutationResult = Apollo.MutationResult<UpdateStoreNameMutation>;
export type UpdateStoreNameMutationOptions = Apollo.BaseMutationOptions<UpdateStoreNameMutation, UpdateStoreNameMutationVariables>;
export const UpdateStoreCategoryDocument = gql`
    mutation UpdateStoreCategory($id: uuid!, $category: String!) {
  update_stores_by_pk(pk_columns: {id: $id}, _set: {category: $category}) {
    id
  }
}
    `;
export type UpdateStoreCategoryMutationFn = Apollo.MutationFunction<UpdateStoreCategoryMutation, UpdateStoreCategoryMutationVariables>;

/**
 * __useUpdateStoreCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateStoreCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoreCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoreCategoryMutation, { data, loading, error }] = useUpdateStoreCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateStoreCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoreCategoryMutation, UpdateStoreCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoreCategoryMutation, UpdateStoreCategoryMutationVariables>(UpdateStoreCategoryDocument, options);
      }
export type UpdateStoreCategoryMutationHookResult = ReturnType<typeof useUpdateStoreCategoryMutation>;
export type UpdateStoreCategoryMutationResult = Apollo.MutationResult<UpdateStoreCategoryMutation>;
export type UpdateStoreCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateStoreCategoryMutation, UpdateStoreCategoryMutationVariables>;
export const UpdateStoreAddressDocument = gql`
    mutation UpdateStoreAddress($id: uuid!, $address: String!) {
  update_stores_by_pk(pk_columns: {id: $id}, _set: {address: $address}) {
    id
  }
}
    `;
export type UpdateStoreAddressMutationFn = Apollo.MutationFunction<UpdateStoreAddressMutation, UpdateStoreAddressMutationVariables>;

/**
 * __useUpdateStoreAddressMutation__
 *
 * To run a mutation, you first call `useUpdateStoreAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoreAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoreAddressMutation, { data, loading, error }] = useUpdateStoreAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateStoreAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoreAddressMutation, UpdateStoreAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoreAddressMutation, UpdateStoreAddressMutationVariables>(UpdateStoreAddressDocument, options);
      }
export type UpdateStoreAddressMutationHookResult = ReturnType<typeof useUpdateStoreAddressMutation>;
export type UpdateStoreAddressMutationResult = Apollo.MutationResult<UpdateStoreAddressMutation>;
export type UpdateStoreAddressMutationOptions = Apollo.BaseMutationOptions<UpdateStoreAddressMutation, UpdateStoreAddressMutationVariables>;
export const UpdateStoreSettingsDocument = gql`
    mutation UpdateStoreSettings($id: uuid!, $settings: jsonb!) {
  update_stores_by_pk(pk_columns: {id: $id}, _set: {settings: $settings}) {
    id
  }
}
    `;
export type UpdateStoreSettingsMutationFn = Apollo.MutationFunction<UpdateStoreSettingsMutation, UpdateStoreSettingsMutationVariables>;

/**
 * __useUpdateStoreSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateStoreSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoreSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoreSettingsMutation, { data, loading, error }] = useUpdateStoreSettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      settings: // value for 'settings'
 *   },
 * });
 */
export function useUpdateStoreSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoreSettingsMutation, UpdateStoreSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStoreSettingsMutation, UpdateStoreSettingsMutationVariables>(UpdateStoreSettingsDocument, options);
      }
export type UpdateStoreSettingsMutationHookResult = ReturnType<typeof useUpdateStoreSettingsMutation>;
export type UpdateStoreSettingsMutationResult = Apollo.MutationResult<UpdateStoreSettingsMutation>;
export type UpdateStoreSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateStoreSettingsMutation, UpdateStoreSettingsMutationVariables>;
export const UpdateUserProfilePictureDocument = gql`
    mutation UpdateUserProfilePicture($id: uuid!, $picture: String!) {
  update_users(where: {id: {_eq: $id}}, _set: {picture: $picture}) {
    affected_rows
  }
}
    `;
export type UpdateUserProfilePictureMutationFn = Apollo.MutationFunction<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>;

/**
 * __useUpdateUserProfilePictureMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfilePictureMutation, { data, loading, error }] = useUpdateUserProfilePictureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useUpdateUserProfilePictureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>(UpdateUserProfilePictureDocument, options);
      }
export type UpdateUserProfilePictureMutationHookResult = ReturnType<typeof useUpdateUserProfilePictureMutation>;
export type UpdateUserProfilePictureMutationResult = Apollo.MutationResult<UpdateUserProfilePictureMutation>;
export type UpdateUserProfilePictureMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables>;
export const UpdateNamesDocument = gql`
    mutation UpdateNames($id: uuid!, $first_name: String!, $last_name: String!, $email: String!) {
  update_users(
    where: {id: {_eq: $id}}
    _set: {first_name: $first_name, last_name: $last_name, email: $email}
  ) {
    affected_rows
  }
}
    `;
export type UpdateNamesMutationFn = Apollo.MutationFunction<UpdateNamesMutation, UpdateNamesMutationVariables>;

/**
 * __useUpdateNamesMutation__
 *
 * To run a mutation, you first call `useUpdateNamesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNamesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on:
 *    https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNamesMutation, { data, loading, error }] = useUpdateNamesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateNamesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNamesMutation, UpdateNamesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNamesMutation, UpdateNamesMutationVariables>(UpdateNamesDocument, options);
      }
export type UpdateNamesMutationHookResult = ReturnType<typeof useUpdateNamesMutation>;
export type UpdateNamesMutationResult = Apollo.MutationResult<UpdateNamesMutation>;
export type UpdateNamesMutationOptions = Apollo.BaseMutationOptions<UpdateNamesMutation, UpdateNamesMutationVariables>;
