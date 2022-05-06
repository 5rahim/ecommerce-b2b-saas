import { GetServerSidePropsFunc } from '@/lib/withApollo'
import { useAppDispatch } from '@/store/index'
import { StoreActions } from '@/store/slices/storeSlice'
import { ApolloClient, gql, useQuery } from '@apollo/client'
import { GetServerSidePropsResultWithSession, getSession } from '@auth0/nextjs-auth0'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'
import { GetStoreQuery } from '../../generated/graphql'

export const GET_STORE = gql`
  query GetStore($sid: String!) {
    stores(limit: 1, where: {sid: {_eq: $sid}}) {
      address
      category
      country
      created_at
      id
      name
      phone
      sid
      store_subscription_id
      theme
      trial_ends
      user_id
      settings
      user {
        id
        user_id
        user_id
        first_name
        last_name
        phone
        picture
      }
      store_subscription {
        status
        subscription {
          id
        }
      }
    }
  }

`

interface WithStoreOptions {
   ownerOnly?: boolean
}

export default function withStore(options: WithStoreOptions, getServerSideProps?: GetServerSidePropsFunc) {
   
   const { ownerOnly = false } = options
   
   return async function (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>,
   ): Promise<GetServerSidePropsResultWithSession> {
      
      const res = await apolloClient.query({
         query: GET_STORE,
         variables: { sid: ctx.params.sid },
      })
      
      let ret: any = { props: {} }
      
      if (getServerSideProps) {
         ret = await getServerSideProps(ctx, apolloClient)
      }
      
      if (res.data.stores.length === 0) {
         return {
            redirect: {
               destination: `/`,
               permanent: false,
            },
         }
      }
      
      const store: GetStoreQuery['stores'][0] = res.data.stores[0]
      
      const session = getSession(ctx.req, ctx.res)
      const userIsOwner = store.user.user_id == session?.user?.sub
   
      if (new Date(store.trial_ends).getTime() < new Date().getTime() && store.store_subscription.status === 'trialing') {
         return {
            redirect: {
               destination: userIsOwner ? `/trial` : '/',
               permanent: false,
            },
         }
      }
      
      if (ownerOnly) {
         if (!userIsOwner) {
            return {
               redirect: {
                  destination: `/`,
                  permanent: false,
               },
            }
         }
      }
      
      return {
         ...ret,
      }
      
   }
}


export function useStoreQuery(): GetStoreQuery['stores'][0] | null {
   
   const router = useRouter()
   const dispatch = useAppDispatch()
   
   const { data } = useQuery(GET_STORE, {
      variables: { sid: router.query.sid },
   })
   
   useEffect(() => {
      dispatch(StoreActions.setStore(( data?.stores?.length > 0 && data?.stores[0] ) ? data?.stores[0] : null))
   }, [data])
   
   return ( data?.stores?.length > 0 && data?.stores[0] ) ? data?.stores[0] : null
   
}
