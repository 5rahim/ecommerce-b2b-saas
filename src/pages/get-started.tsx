import CenteredLayout from '@/components/common/Layouts/CenteredLayout'
import SEO from '@/components/common/SEO'
import CreateStore from '@/components/modules/get-started'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import withApollo from '@/lib/withApollo'
import { gql } from '@apollo/client'
import { getSession } from '@auth0/nextjs-auth0'
import withUser from '../graphql/hocs/withUser'

const GetStarted = () => {
   
   const t = useTypeSafeTranslation()
   
   return (
      <CenteredLayout>
         <SEO title={t(`title.get_started`)} />
         <CreateStore />
      </CenteredLayout>
   )
}

export const getServerSideProps = withApollo({ auth: true, returnTo: "/get-started", translations: ['form'] }, withUser(async (ctx, apolloClient) => {

    try {
       const session = getSession(ctx.req, ctx.res)

        const res = await apolloClient.query({
            query: gql`
              query GetStoreByUser($user_id: String!) {
                stores(limit: 1, where: {user: {user_id: {_eq: $user_id}}}) {
                  id
                  sid
                }
              }
            `,
           variables: { user_id: session.user.sub },
        })
       
       if (res.data.stores.length > 0) {
          return {
             redirect: {
                destination: `/store/${res.data.stores[0].sid}`,
                permanent: false,
             },
          }
       }
    }
    catch (e) {
       return {
          props: {},
       }
    }
   
   return {
      props: {},
   }
}))

export default GetStarted
