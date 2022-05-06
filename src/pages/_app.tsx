import Head from '@/components/common/Head'
import { useApollo } from '@/lib/apolloClient'
import store from '@/store/index'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import "@fontsource/petrona"
import "@fontsource/petrona/100.css"
import "@fontsource/petrona/200.css"
import "@fontsource/petrona/300.css"
import "@fontsource/petrona/400.css"
import "@fontsource/petrona/500.css"
import "@fontsource/petrona/600.css"
import "@fontsource/petrona/700.css"
import "@fontsource/petrona/800.css"
import "@fontsource/petrona/900.css"
import { SaasProvider } from '@saas-ui/react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { Provider as ReduxProvider } from 'react-redux'
import theme from '../styles/theme'


Router.events.on("routeChangeStart", () => {
   NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
   const router = useRouter()
   const { user } = pageProps
   const apolloClient = useApollo(pageProps)
   
   // if (typeof window === "undefined") {
   return (
      <ApolloProvider client={apolloClient}>
         <UserProvider user={user}>
            <ReduxProvider store={store}>
               <SaasProvider theme={theme}>
                  <Head />
                  <Component {...pageProps} />
               </SaasProvider>
            </ReduxProvider>
         </UserProvider>
      </ApolloProvider>
   )
   // }
   
   // return (
   //    <UserProvider user={user}>
   //       <ReduxProvider store={store}>
   //          <PersistGate loading={null} persistor={persistor}>
   //             <ApolloProvider client={apolloClient}>
   //                <ChakraProvider resetCSS theme={theme}>
   //                   <Head />
   //                   <Component {...pageProps} />
   //                </ChakraProvider>
   //             </ApolloProvider>
   //          </PersistGate>
   //       </ReduxProvider>
   //    </UserProvider>
   // )
}

export default appWithTranslation(App)
