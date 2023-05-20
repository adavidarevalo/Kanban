import React from 'react'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/theme'
import { ApolloClientProviders } from '../context/apollo_client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloClientProviders>
        <Component {...pageProps} />
      </ApolloClientProviders>
    </ChakraProvider>
  )
}
