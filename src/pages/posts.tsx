import MainLayout from '@/components/common/Layouts/MainLayout'
import SEO from '@/components/common/SEO'
import PostList, { ALL_POSTS_QUERY } from '@/components/PostList'
import withApollo from '@/lib/withApollo'
import { Button, Code, Container } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const Posts = () => {
   const { t } = useTranslation()
   return (
      <MainLayout navbar="landing">
         <SEO title="Test" />
         <Container height="100vh">
            <Code>TypeScript</Code>
            <PostList />
            <Button colorScheme="blue">{t('page.home')}</Button>
         </Container>
      </MainLayout>
   )
}

export const getServerSideProps = withApollo({ auth: true },
   async (ctx, apolloClient) => {
      const t = await apolloClient.query({
         query: ALL_POSTS_QUERY,
      })
      
      return {
         props: {},
      }
   },
)


export default Posts
