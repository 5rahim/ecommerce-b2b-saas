import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { useEffect, useMemo, useState } from 'react'
import { SubscriptionClient } from 'subscriptions-transport-ws'


export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient
let accessToken: any = null

const createWSLink = () => {
   return new WebSocketLink(
      new SubscriptionClient(`wss://mosu.hasura.app/v1/graphql`, {
         lazy: true,
         reconnect: true,
         connectionParams: async () => {
            await requestAccessToken() // happens on the client
            return {
               headers: accessToken ? {
                  authorization: `Bearer ${accessToken}`,
               } : {},
            }
         },
      }),
   )
}

const createHttpLink = (token: any) => {
   
   const httpLink = new HttpLink({
      uri: `https://mosu.hasura.app/v1/graphql`,
      credentials: 'include',
      headers: token ? {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         Authorization: token ? `Bearer ${token}` : null,
      } : {}, // auth token is fetched on the server side
      fetch,
   })
   return httpLink
}

function createApolloClient(token) {
   
   const ssrMode = typeof window === 'undefined'
   let link
   if (ssrMode) {
      link = createHttpLink(token)
   } else {
      link = createWSLink()
   }
   
   return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: link,
      cache: new InMemoryCache({
         typePolicies: {
            Query: {},
         },
      }),
   })
}

export function initializeApollo(initialState = null, token = null) {
   const _apolloClient = apolloClient ?? createApolloClient(token)
   
   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
   // gets hydrated here
   if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract()
      
      // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
      const data = merge(existingCache, initialState, {
         // combine arrays using object equality (like in sets)
         arrayMerge: (destinationArray, sourceArray) => [
            ...sourceArray,
            ...destinationArray.filter((d) =>
               sourceArray.every((s) => !isEqual(d, s)),
            ),
         ],
      })
      
      // Restore the cache with the merged data
      _apolloClient.cache.restore(data)
   }
   // For SSG and SSR always create a new Apollo Client
   if (typeof window === 'undefined') return _apolloClient
   // Create the Apollo Client once in the client
   if (!apolloClient) apolloClient = _apolloClient
   
   return _apolloClient
}

export function addApolloState(client, pageProps) {
   if (pageProps?.props) {
      pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
   }
   
   return pageProps
}


const requestAccessToken = async () => {
   if (accessToken) return
   
   const res = await fetch(`http://127.0.0.1:3000/api/token`)
   
   if (res.ok) {
      const json = await res.json()
      accessToken = json.idToken
   } else {
      accessToken = null
   }
}

export function useApollo(pageProps) {
   const state = pageProps[APOLLO_STATE_PROP_NAME]
   const [accessToken, setAccessToken] = useState(null)
   
   useEffect(() => {
      async function fetch() {
         const token = await requestAccessToken()
         console.log(token)
         setAccessToken(token)
      }
      
      fetch()
   }, [state])
   
   const store = useMemo(() => initializeApollo(state, accessToken), [state, accessToken])
   return store
}
