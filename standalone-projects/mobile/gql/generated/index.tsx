import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input'];
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  feedbacks: Array<Feedback>;
  id: Scalars['Int']['output'];
  published: Scalars['Boolean']['output'];
  reads: Array<Read>;
  reporter?: Maybe<Reporter>;
  reporterUid: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ArticleListRelationFilter = {
  every?: InputMaybe<ArticleWhereInput>;
  none?: InputMaybe<ArticleWhereInput>;
  some?: InputMaybe<ArticleWhereInput>;
};

export type ArticleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ArticleOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reads?: InputMaybe<ReadOrderByRelationAggregateInput>;
  reporter?: InputMaybe<ReporterOrderByWithRelationInput>;
  reporterUid?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ArticleRelationFilter = {
  is?: InputMaybe<ArticleWhereInput>;
  isNot?: InputMaybe<ArticleWhereInput>;
};

export enum ArticleScalarFieldEnum {
  Body = 'body',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  ReporterUid = 'reporterUid',
  Tags = 'tags',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ArticleWhereInput = {
  AND?: InputMaybe<Array<ArticleWhereInput>>;
  NOT?: InputMaybe<Array<ArticleWhereInput>>;
  OR?: InputMaybe<Array<ArticleWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  feedbacks?: InputMaybe<FeedbackListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  reads?: InputMaybe<ReadListRelationFilter>;
  reporter?: InputMaybe<ReporterRelationFilter>;
  reporterUid?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleWithScore = {
  __typename?: 'ArticleWithScore';
  article: Article;
  score: Scalars['Float']['output'];
};

export type AuthProvider = {
  __typename?: 'AuthProvider';
  type: AuthProviderType;
  uid: Scalars['String']['output'];
};

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE'
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateAdminInput = {
  uid: Scalars['String']['input'];
};

export type CreateArticleInput = {
  body: Scalars['String']['input'];
  published: Scalars['Boolean']['input'];
  reporterUid: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateFeedbackInput = {
  articleId: Scalars['Int']['input'];
  type: FeedbackType;
  uid: Scalars['String']['input'];
};

export type CreateReadInput = {
  articleId: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
};

export type CreateReporterInput = {
  uid: Scalars['String']['input'];
};

export type CreateUserWithCredentialsInput = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: AuthProviderType;
  uid: Scalars['String']['input'];
};

export type Credential = {
  __typename?: 'Credential';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  passwordHash: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EnumFeedbackTypeFilter = {
  equals?: InputMaybe<FeedbackType>;
  in?: InputMaybe<Array<FeedbackType>>;
  not?: InputMaybe<FeedbackType>;
  notIn?: InputMaybe<Array<FeedbackType>>;
};

export type Feedback = {
  __typename?: 'Feedback';
  article: Article;
  articleId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: FeedbackType;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type FeedbackListRelationFilter = {
  every?: InputMaybe<FeedbackWhereInput>;
  none?: InputMaybe<FeedbackWhereInput>;
  some?: InputMaybe<FeedbackWhereInput>;
};

export type FeedbackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FeedbackOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum FeedbackScalarFieldEnum {
  ArticleId = 'articleId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export enum FeedbackType {
  Dislike = 'DISLIKE',
  Hate = 'HATE',
  Like = 'LIKE',
  Love = 'LOVE'
}

export type FeedbackUidArticleIdCompoundUniqueInput = {
  articleId: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
};

export type FeedbackWhereInput = {
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumFeedbackTypeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type FeedbackWhereUniqueInput = {
  uid_articleId: FeedbackUidArticleIdCompoundUniqueInput;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createArticle: Article;
  createFeedback: Feedback;
  createRead: Read;
  createReporter: Reporter;
  createUserWithCredentials: User;
  createUserWithProvider: User;
  giveMyFeedback: Feedback;
  removeAdmin: Admin;
  removeArticle: Article;
  removeFeedback: Feedback;
  removeRead: Read;
  removeReporter: Reporter;
  removeUser: User;
  updateAdmin: Admin;
  updateArticle: Article;
  updateFeedback: Feedback;
  updateRead: Read;
  updateReporter: Reporter;
  updateUser: User;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationCreateFeedbackArgs = {
  createFeedbackInput: CreateFeedbackInput;
};


export type MutationCreateReadArgs = {
  createReadInput: CreateReadInput;
};


export type MutationCreateReporterArgs = {
  createReporterInput: CreateReporterInput;
};


export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: CreateUserWithCredentialsInput;
};


export type MutationCreateUserWithProviderArgs = {
  createUserWithProviderInput: CreateUserWithProviderInput;
};


export type MutationGiveMyFeedbackArgs = {
  articleId: Scalars['Int']['input'];
  feedbackId?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


export type MutationRemoveAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>;
};


export type MutationRemoveArticleArgs = {
  where?: InputMaybe<ArticleWhereUniqueInput>;
};


export type MutationRemoveFeedbackArgs = {
  where?: InputMaybe<FeedbackWhereUniqueInput>;
};


export type MutationRemoveReadArgs = {
  where?: InputMaybe<ReadWhereUniqueInput>;
};


export type MutationRemoveReporterArgs = {
  where?: InputMaybe<ReporterWhereUniqueInput>;
};


export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput;
};


export type MutationUpdateFeedbackArgs = {
  updateFeedbackInput: UpdateFeedbackInput;
};


export type MutationUpdateReadArgs = {
  updateReadInput: UpdateReadInput;
};


export type MutationUpdateReporterArgs = {
  updateReporterInput: UpdateReporterInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  admin: Admin;
  adminMe: Admin;
  admins: Array<Admin>;
  article: Article;
  articles: Array<Article>;
  articlesForAdmin: Array<Article>;
  feedback?: Maybe<Feedback>;
  feedbacks: Array<Feedback>;
  getAuthProvider?: Maybe<AuthProvider>;
  getCredentials?: Maybe<User>;
  myArticles: Array<Article>;
  myFeedback?: Maybe<Feedback>;
  questionAI: Scalars['String']['output'];
  read: Read;
  reads: Array<Read>;
  relatedArticles: Array<ArticleWithScore>;
  reporter: Reporter;
  reporterMe?: Maybe<Reporter>;
  reporters: Array<Reporter>;
  user: User;
  users: Array<User>;
};


export type QueryAdminArgs = {
  where?: InputMaybe<AdminWhereUniqueInput>;
};


export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryArticleArgs = {
  where?: InputMaybe<ArticleWhereUniqueInput>;
};


export type QueryArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryArticlesForAdminArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryFeedbackArgs = {
  where?: InputMaybe<FeedbackWhereUniqueInput>;
};


export type QueryFeedbacksArgs = {
  cursor?: InputMaybe<FeedbackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FeedbackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FeedbackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeedbackWhereInput>;
};


export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input'];
};


export type QueryGetCredentialsArgs = {
  email: Scalars['String']['input'];
};


export type QueryMyArticlesArgs = {
  cursor?: InputMaybe<ArticleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ArticleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryMyFeedbackArgs = {
  articleId: Scalars['Int']['input'];
};


export type QueryQuestionAiArgs = {
  query: Scalars['String']['input'];
};


export type QueryReadArgs = {
  where?: InputMaybe<ReadWhereUniqueInput>;
};


export type QueryReadsArgs = {
  cursor?: InputMaybe<ReadWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReadScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReadOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReadWhereInput>;
};


export type QueryReporterArgs = {
  where?: InputMaybe<ReporterWhereUniqueInput>;
};


export type QueryReportersArgs = {
  cursor?: InputMaybe<ReporterWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReporterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReporterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReporterWhereInput>;
};


export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Read = {
  __typename?: 'Read';
  article: Article;
  articleId: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ReadListRelationFilter = {
  every?: InputMaybe<ReadWhereInput>;
  none?: InputMaybe<ReadWhereInput>;
  some?: InputMaybe<ReadWhereInput>;
};

export type ReadOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReadOrderByWithRelationInput = {
  article?: InputMaybe<ArticleOrderByWithRelationInput>;
  articleId?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum ReadScalarFieldEnum {
  ArticleId = 'articleId',
  Count = 'count',
  CreatedAt = 'createdAt',
  Id = 'id',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type ReadWhereInput = {
  AND?: InputMaybe<Array<ReadWhereInput>>;
  NOT?: InputMaybe<Array<ReadWhereInput>>;
  OR?: InputMaybe<Array<ReadWhereInput>>;
  article?: InputMaybe<ArticleRelationFilter>;
  articleId?: InputMaybe<IntFilter>;
  count?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type ReadWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Reporter = {
  __typename?: 'Reporter';
  articles: Array<Article>;
  createdAt: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ReporterOrderByWithRelationInput = {
  articles?: InputMaybe<ArticleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type ReporterRelationFilter = {
  is?: InputMaybe<ReporterWhereInput>;
  isNot?: InputMaybe<ReporterWhereInput>;
};

export enum ReporterScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type ReporterWhereInput = {
  AND?: InputMaybe<Array<ReporterWhereInput>>;
  NOT?: InputMaybe<Array<ReporterWhereInput>>;
  OR?: InputMaybe<Array<ReporterWhereInput>>;
  articles?: InputMaybe<ArticleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type ReporterWhereUniqueInput = {
  uid: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAdminInput = {
  uid: Scalars['String']['input'];
};

export type UpdateArticleInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  published?: InputMaybe<Scalars['Boolean']['input']>;
  reporterUid?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedbackInput = {
  articleId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  type?: InputMaybe<FeedbackType>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReadInput = {
  articleId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReporterInput = {
  uid: Scalars['String']['input'];
};

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  credential: Credential;
  feedbacks: Array<Feedback>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reads: Array<Read>;
  reporter?: Maybe<Reporter>;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  feedbacks?: InputMaybe<FeedbackOrderByRelationAggregateInput>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reads?: InputMaybe<ReadOrderByRelationAggregateInput>;
  reporter?: InputMaybe<ReporterOrderByWithRelationInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  admin?: InputMaybe<AdminRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  feedbacks?: InputMaybe<FeedbackListRelationFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reads?: InputMaybe<ReadListRelationFilter>;
  reporter?: InputMaybe<ReporterRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input'];
};

export type ArticlesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArticleOrderByWithRelationInput> | ArticleOrderByWithRelationInput>;
  where?: InputMaybe<ArticleWhereInput>;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', id: number, title: string, createdAt: any, tags: Array<string> }> };

export type ArticleQueryVariables = Exact<{
  where?: InputMaybe<ArticleWhereUniqueInput>;
}>;


export type ArticleQuery = { __typename?: 'Query', article: { __typename?: 'Article', id: number, body: string, createdAt: any, title: string, tags: Array<string>, reporter?: { __typename?: 'Reporter', user: { __typename?: 'User', image?: string | null, name: string, uid: string } } | null } };

export const namedOperations = {
  Query: {
    articles: 'articles',
    article: 'article'
  }
}

export const ArticlesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reporter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;