import { GetServerSidePropsFunc } from '@/lib/withApollo'
import { useAppDispatch } from '@/store/index'
import { UserActions } from '@/store/slices/userSlice'
import { ApolloClient, gql, useQuery } from '@apollo/client'
import { GetServerSidePropsResultWithSession, getSession, useUser as useAuth0User } from '@auth0/nextjs-auth0'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'
import { GetUserByUserIdQuery } from '../../generated/graphql'

export const GET_USER_BY_USER_ID = gql`
  query GetUserByUserID($user_id: String!) {
    users(where: {user_id: {_eq: $user_id}}) {
      created_at
      email
      first_name
      id
      last_name
      phone
      picture
      user_id
      stores {
        id
        sid
        name
      }
    }
  }
`


export default function withUser(getServerSideProps?: GetServerSidePropsFunc) {
   
   
   return async function (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>,
   ): Promise<GetServerSidePropsResultWithSession> {
      
      let ret: any = { props: {} }
      
      try {
         
         const session = getSession(ctx.req, ctx.res)
         
         const res = await apolloClient.query({
            query: GET_USER_BY_USER_ID,
            variables: { user_id: session?.user?.sub },
         })
         
         if (res.data.users.length === 0) {
            return {
               redirect: {
                  destination: `/`,
                  permanent: false,
               },
            }
         }
   
         
      }
      catch (e) {
         
         if(e.toString().includes('JWTExpired')) {
   
            return {
               redirect: {
                  destination: `/api/auth/logout`,
                  permanent: false,
               },
            }
            
         }
         
         return {
            redirect: {
               destination: `/`,
               permanent: false,
            },
         }
         
         
      }
      
      if (getServerSideProps) {
         ret = await getServerSideProps(ctx, apolloClient)
      }
      
      return {
         ...ret,
      }
      
   }
}

export function useUserQuery(): { profile: GetUserByUserIdQuery['users'][0] | null, isLoading: boolean } {
   
   const session = useAuth0User()
   const dispatch = useAppDispatch()
   
   const { data: res, loading } = useQuery(GET_USER_BY_USER_ID, { variables: { user_id: session?.user?.sub } })
   
   // useEffect(() => {
   //    if(session.user) {
   //       fetchUser({
   //          variables: { user_id: session?.user?.sub },
   //       })
   //    } else {
   //       dispatch(UserActions.setUser({ profile: null }))
   //    }
   // }, [session])
   
   useEffect(() => {
      dispatch(UserActions.setUser({ profile: res?.users[0] ?? null }))
   }, [res])
   
   return {
      profile: res?.users[0] ?? null,
      isLoading: loading
   }
   
}
//
//
// export function useUserQuery(): { profile: GetUserByUserIdQuery['users'][0] | null } {
//
//    const session = useAuth0User()
//    const dispatch = useAppDispatch()
//
//    const [fetchUser, { data: res }] = useLazyQuery(GET_USER_BY_USER_ID)
//
//    useEffect(() => {
//       if(session.user) {
//          fetchUser({
//             variables: { user_id: session?.user?.sub },
//          })
//       } else {
//          dispatch(UserActions.setUser({ profile: null }))
//       }
//    }, [session])
//
//    useEffect(() => {
//       dispatch(UserActions.setUser({ profile: res?.users[0] ?? null }))
//    }, [res])
//
//    return {
//       profile: res?.users[0] ?? null,
//    }
//
// }
