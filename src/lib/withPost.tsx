import { ApolloClient } from '@apollo/client'
import { GetServerSidePropsResultWithSession } from '@auth0/nextjs-auth0'
import { POST_QUERY } from '@mosu/graphql/schema/posts/queries'
import { GetServerSidePropsFunc } from '@mosu/lib/withApollo'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function withPost(getServerSideProps?: GetServerSidePropsFunc) {
   
   return async function (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>,
   ): Promise<GetServerSidePropsResultWithSession> {
      
      const t = await apolloClient.query({
         query: POST_QUERY,
         variables: { id: ctx.params.id },
      })
      
      let ret: any = { props: {} }
      
      if (getServerSideProps) {
         ret = await getServerSideProps(ctx, apolloClient)
      }
      
      if (t.data.posts.length === 0) {
         return {
            redirect: {
               destination: `/`,
               permanent: false,
            },
         }
      }
      
      return {
         ...ret,
      }
      
   }
}
