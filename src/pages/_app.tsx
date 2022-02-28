import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'


import theme from 'styles/theme'
import { useApollo } from '../lib/apolloClient'

function App({ Component, pageProps }: AppProps) {
   const router = useRouter()
   const { user } = pageProps
   const apolloClient = useApollo(pageProps)
   
   return (
      <UserProvider user={user}>
         <ApolloProvider client={apolloClient}>
            <ChakraProvider resetCSS theme={theme}>
               <Component {...pageProps} />
            </ChakraProvider>
         </ApolloProvider>
      </UserProvider>
   )
}

export default appWithTranslation(App)
