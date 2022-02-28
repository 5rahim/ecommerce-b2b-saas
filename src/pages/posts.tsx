import { Button, Code } from '@chakra-ui/react'
import withApollo from '@mosu/lib/withApollo'
import { useTranslation } from 'next-i18next'
import { Container } from '../components/Container'
import PostList, { ALL_POSTS_QUERY } from '../components/PostList'

const Posts = () => {
   const { t } = useTranslation()
   return (
      <Container height="100vh">
         <Code>TypeScript</Code>
         <PostList />
         <Button colorScheme="blue">{t('page.home')}</Button>
      </Container>
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
