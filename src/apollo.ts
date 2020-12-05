import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink() {
  if (typeof window === "undefined") {
    //server
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("src/schema");
    return new SchemaLink({ schema });
  } else {
    //client
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({ uri: "api/graphql", credentials: "include" });
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            todos: {
              keyArgs: [],
              merge: false,
            },
          },
        },
      },
    }),
    credentials: "include",
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;
  return apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject | null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
