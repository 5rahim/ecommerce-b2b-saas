import { GetServerSidePropsFunc } from '@/lib/withApollo'
import { ApolloClient, gql } from '@apollo/client'
import { GetServerSidePropsResultWithSession } from '@auth0/nextjs-auth0'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function withPost(getServerSideProps?: GetServerSidePropsFunc) {

    return async function (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>,
    ): Promise<GetServerSidePropsResultWithSession> {

        const t = await apolloClient.query({
            query: gql`
              query posts($id: uuid!) {
                posts(where: { id: { _eq: $id } }) {
                  id
                  text
                }
              }
            `,
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
