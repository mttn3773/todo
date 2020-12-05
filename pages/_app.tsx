import { ApolloProvider } from "@apollo/client";
import { Layout } from "components/Layout/Layout";
import { createContext, useCallback, useEffect, useState } from "react";
import { useApollo } from "src/apollo";
import { DataProvider } from "store/globalStore";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: any) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </ApolloProvider>
  );
}

export default MyApp;
