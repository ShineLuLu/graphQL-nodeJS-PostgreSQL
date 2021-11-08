/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/**  @model  */
export type Comment = {
  __typename?: 'Comment';
  description?: Maybe<Scalars['String']>;
  /**  @id  */
  id: Scalars['ID'];
  /** @manyToOne(field: 'comments', key: 'noteId') */
  note?: Maybe<Note>;
  text?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  and?: Maybe<Array<CommentFilter>>;
  description?: Maybe<StringInput>;
  id?: Maybe<IdInput>;
  not?: Maybe<CommentFilter>;
  noteId?: Maybe<IdInput>;
  or?: Maybe<Array<CommentFilter>>;
  text?: Maybe<StringInput>;
};

export type CommentResultList = {
  __typename?: 'CommentResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Comment>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CommentSubscriptionFilter = {
  and?: Maybe<Array<CommentSubscriptionFilter>>;
  description?: Maybe<StringInput>;
  id?: Maybe<IdInput>;
  not?: Maybe<CommentSubscriptionFilter>;
  or?: Maybe<Array<CommentSubscriptionFilter>>;
  text?: Maybe<StringInput>;
};

export type CreateCommentInput = {
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type CreateNoteInput = {
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type IdInput = {
  eq?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
};

export type MutateCommentInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noteId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type MutateNoteInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createNote?: Maybe<Note>;
  deleteComment?: Maybe<Comment>;
  deleteNote?: Maybe<Note>;
  updateComment?: Maybe<Comment>;
  updateNote?: Maybe<Note>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationDeleteCommentArgs = {
  input: MutateCommentInput;
};


export type MutationDeleteNoteArgs = {
  input: MutateNoteInput;
};


export type MutationUpdateCommentArgs = {
  input: MutateCommentInput;
};


export type MutationUpdateNoteArgs = {
  input: MutateNoteInput;
};

/**  @model  */
export type Note = {
  __typename?: 'Note';
  /**
   * @oneToMany(field: 'note', key: 'noteId')
   * @oneToMany(field: 'note')
   */
  comments: Array<Maybe<Comment>>;
  description?: Maybe<Scalars['String']>;
  /**  @id  */
  id: Scalars['ID'];
  title: Scalars['String'];
};


/**  @model  */
export type NoteCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};

export type NoteFilter = {
  and?: Maybe<Array<NoteFilter>>;
  description?: Maybe<StringInput>;
  id?: Maybe<IdInput>;
  not?: Maybe<NoteFilter>;
  or?: Maybe<Array<NoteFilter>>;
  title?: Maybe<StringInput>;
};

export type NoteResultList = {
  __typename?: 'NoteResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Note>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type NoteSubscriptionFilter = {
  and?: Maybe<Array<NoteSubscriptionFilter>>;
  description?: Maybe<StringInput>;
  id?: Maybe<IdInput>;
  not?: Maybe<NoteSubscriptionFilter>;
  or?: Maybe<Array<NoteSubscriptionFilter>>;
  title?: Maybe<StringInput>;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findComments: CommentResultList;
  findNotes: NoteResultList;
  getComment?: Maybe<Comment>;
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getNote?: Maybe<Note>;
};


export type QueryFindCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetNoteArgs = {
  id: Scalars['ID'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringInput = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedComment: Comment;
  deletedNote: Note;
  newComment: Comment;
  newNote: Note;
  updatedComment: Comment;
  updatedNote: Note;
};


export type SubscriptionDeletedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionDeletedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionNewCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionNewNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionUpdatedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionUpdatedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};
