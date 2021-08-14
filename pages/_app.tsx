import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: relayStylePagination(),
          products: relayStylePagination(),
          // userByUsername: {
          //   merge(existing, incoming) {
          //     if (!existing) return incoming;

          //     const newData = {};

          //     for (const x in incoming) {
          //       if (typeof incoming[x] == "object") {
          //         if (
          //           (incoming[x]?.__typename as string)?.includes("Connection")
          //         ) {
          //           const typeName = incoming[x].__typename;
          //           for (const y in existing ?? {}) {
          //             if (typeof existing[y] == "object") {
          //               if (typeName == existing[y]?.__typename) {
          //                 const remove = x.indexOf("(");
          //                 Object.defineProperty(newData, x.substr(0, remove), {
          //                   value: {
          //                     ...existing[y],
          //                     ...incoming[x],
          //                     edges: [
          //                       ...(existing[y]?.edges ?? []),
          //                       ...(incoming[x].edges ?? []),
          //                     ],
          //                   },
          //                 });
          //               }
          //             }
          //           }
          //         }
          //       }
          //     }

          //     console.log(newData);

          //     return incoming;

          //     return { ...existing, ...incoming, ...newData };
          //   },
          // },
        },
      },
    },
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
