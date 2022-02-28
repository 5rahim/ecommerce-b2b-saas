import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { useMemo } from 'react'


export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

function createApolloClient(token = null) {
   return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
         uri: process.env.HASURA_GRAPHQL_API, // Server URL (must be absolute)
         credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
         },
      }),
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

export function useApollo(pageProps) {
   const state = pageProps[APOLLO_STATE_PROP_NAME]
   const store = useMemo(() => initializeApollo(state), [state])
   return store
}
