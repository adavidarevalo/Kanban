'use client'
import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('GraphQL Errors:', graphQLErrors)
  }

  if (networkError) {
    console.log('Network Error:', networkError)
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
})
export const ApolloClientProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const client = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
