import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  DateTime: any;
};

/** Mutations for user model */
export type Mutation = {
  __typename?: 'Mutation';
  deleteManyUser: BatchPayload;
  deleteOneUser?: Maybe<User>;
  register?: Maybe<UserResponse>;
  /** Login user mutation */
  login?: Maybe<UserResponse>;
  /** Log user out */
  logout?: Maybe<Scalars['Boolean']>;
  createOneTodo: Todo;
  deleteOneTodo?: Maybe<Todo>;
  deleteManyTodo: BatchPayload;
  check?: Maybe<Scalars['Boolean']>;
};


/** Mutations for user model */
export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


/** Mutations for user model */
export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


/** Mutations for user model */
export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


/** Mutations for user model */
export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


/** Mutations for user model */
export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};


/** Mutations for user model */
export type MutationDeleteOneTodoArgs = {
  where: TodoWhereUniqueInput;
};


/** Mutations for user model */
export type MutationDeleteManyTodoArgs = {
  where?: Maybe<TodoWhereInput>;
};


/** Mutations for user model */
export type MutationCheckArgs = {
  id?: Maybe<Scalars['Int']>;
};

/** Queryes for user model */
export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  /** Returns user data based on session */
  me?: Maybe<User>;
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
};


/** Queryes for user model */
export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


/** Queryes for user model */
export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


/** Queryes for user model */
export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};


/** Queryes for user model */
export type QueryTodosArgs = {
  where?: Maybe<TodoWhereInput>;
};

/** Response for user queryes and mutations. Includes error responses */
export type UserResponse = {
  __typename?: 'UserResponse';
  user?: Maybe<User>;
  error?: Maybe<ErrorField>;
};

export type User = {
  __typename?: 'User';
  username: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  todoId?: Maybe<Scalars['Int']>;
  todos: Array<Todo>;
  token?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
};


export type UserTodosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TodoWhereUniqueInput>;
  after?: Maybe<TodoWhereUniqueInput>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  User?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  completed: Scalars['Boolean'];
};

export type ErrorField = {
  __typename?: 'ErrorField';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  todos?: Maybe<TodoListRelationFilter>;
  todoId?: Maybe<IntNullableFilter>;
  count?: Maybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type TodoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  body: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
  User?: Maybe<UserCreateOneWithoutTodosInput>;
};

export type TodoWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TodoWhereInput = {
  AND?: Maybe<Array<TodoWhereInput>>;
  OR?: Maybe<Array<TodoWhereInput>>;
  NOT?: Maybe<Array<TodoWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  body?: Maybe<StringFilter>;
  User?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
  completed?: Maybe<BoolFilter>;
};


export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type TodoListRelationFilter = {
  every?: Maybe<TodoWhereInput>;
  some?: Maybe<TodoWhereInput>;
  none?: Maybe<TodoWhereInput>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type UserCreateOneWithoutTodosInput = {
  create?: Maybe<UserCreateWithoutTodosInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithouttodosInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type UserCreateWithoutTodosInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  todoId?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UserCreateOrConnectWithouttodosInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutTodosInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type CheckMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CheckMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'check'>
);

export type CreateTodoMutationVariables = Exact<{
  body: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createOneTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'body' | 'completed'>
  ) }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneTodo?: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id'>
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'token'>
    )>, error?: Maybe<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, error?: Maybe<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'id'>
  )> }
);

export type TodosQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'body' | 'createdAt' | 'completed'>
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { todos: Array<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'createdAt'>
    )> }
  )> }
);


export const CheckDocument = gql`
    mutation check($id: Int!) {
  check(id: $id)
}
    `;
export type CheckMutationFn = Apollo.MutationFunction<CheckMutation, CheckMutationVariables>;

/**
 * __useCheckMutation__
 *
 * To run a mutation, you first call `useCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkMutation, { data, loading, error }] = useCheckMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCheckMutation(baseOptions?: Apollo.MutationHookOptions<CheckMutation, CheckMutationVariables>) {
        return Apollo.useMutation<CheckMutation, CheckMutationVariables>(CheckDocument, baseOptions);
      }
export type CheckMutationHookResult = ReturnType<typeof useCheckMutation>;
export type CheckMutationResult = Apollo.MutationResult<CheckMutation>;
export type CheckMutationOptions = Apollo.BaseMutationOptions<CheckMutation, CheckMutationVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($body: String!, $userId: Int!) {
  createOneTodo(data: {body: $body, User: {connect: {id: $userId}}}) {
    id
    body
    completed
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      body: // value for 'body'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: Int!) {
  deleteOneTodo(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
      username
      token
    }
    error {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    user {
      id
      username
    }
    error {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TodosDocument = gql`
    query todos($userId: Int!) {
  todos(where: {userId: {equals: $userId}}) {
    id
    body
    createdAt
    completed
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useTodosQuery(baseOptions: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const UserDocument = gql`
    query user($userId: Int!) {
  user(where: {id: $userId}) {
    todos {
      id
      createdAt
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;