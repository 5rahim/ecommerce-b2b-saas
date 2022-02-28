import { ApolloClient } from '@apollo/client'
import { GetServerSidePropsResultWithSession, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse, PreviewData } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSidePropsResult } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import { addApolloState, initializeApollo } from './apolloClient'

export const assertReqRes = (req: NextApiRequest, res: NextApiResponse): void => {
   if (!req) {
      throw new Error('Request is not available')
   }
   if (!res) {
      throw new Error('Response is not available')
   }
}

export const assertCtx = ({ req, res }: GetServerSidePropsContext<any>): void => {
   if (!req) {
      throw new Error('Request is not available')
   }
   if (!res) {
      throw new Error('Response is not available')
   }
}

export type GetServerSidePropsFunc<P = any> = (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
                                               apolloClient: ApolloClient<any>,
) => Promise<GetServerSidePropsResult<P>>

export type WithPageOptions<P = any> = {
   // getServerSideProps?: ;
   auth?: boolean,
   returnTo?: string,
   namespacesRequired?: string[]
};

export default function withApollo(optsOrComponent: WithPageOptions, getServerSideProps: GetServerSidePropsFunc): any {
   
   const {
      namespacesRequired = [],
      auth,
      returnTo = '/',
   } = optsOrComponent
   
   async function gssp(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResultWithSession> {
      assertCtx(ctx)
      
      const session = auth ? getSession(ctx.req, ctx.res) : null
      
      const apolloClient = initializeApollo(null, auth ? session?.idToken : null)
      
      let ret: any = { props: {} }
      
      if (getServerSideProps) {
         ret = await getServerSideProps(ctx, apolloClient)
      }
      
      return addApolloState(apolloClient, {
         ...ret,
         props: {
            ...ret.props,
            ...await serverSideTranslations(ctx.locale, ['shared', ...namespacesRequired]),
         },
      })
      
   }
   
   if (auth) {
      return withPageAuthRequired({
         returnTo: returnTo,
         async getServerSideProps(ctx) { return gssp(ctx) },
      })
   }
   
   return gssp
   
   
}

// export const getServerSideProps = withServerSideAuth(
//    async (context) => {
//       const { userId, sessionId, getToken } = context.auth;
//       console.log('Available during SSR:', sessionId, userId, await getToken());
//       const apolloClient = initializeApollo(null, await getToken())
//
//       await apolloClient.query({
//          query: ALL_POSTS_QUERY,
//       })
//
//       return addApolloState(apolloClient, {
//          props: {},
//       })
//    }
// )

// async getServerSideProps(ctx) {
//    // access the user session
//    const session = getSession(ctx.req, ctx.res)
//
//    const apolloClient = initializeApollo(null, session.idToken)
//
//    await apolloClient.query({
//       query: ALL_POSTS_QUERY,
//    })
//
//    return addApolloState(apolloClient, {
//       props: {
//          ...await serverSideTranslations(ctx.locale, ['shared'])
//       },
//    })
//
// },
// })

