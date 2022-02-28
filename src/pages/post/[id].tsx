import { Box, Code } from '@chakra-ui/react'
import { Container } from '@mosu/components/Container'
import withApollo from '@mosu/lib/withApollo'
import withPost from '@mosu/lib/withPost'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { usePostsQuery } from '../../generated/graphql'


const Post = () => {
   const { t } = useTranslation()
   const router = useRouter()
   
   const { data } = usePostsQuery({ variables: { id: router.query.id } })
   
   return (
      <Container height="100vh">
         <Code>TypeScript</Code>
         <Box>{data.posts[0].text}</Box>
      </Container>
   )
}

export const getServerSideProps = withApollo({ auth: true }, withPost())

// export const getServerSideProps = withPage({ auth: true },
//    withPost(async (ctx, apolloClient) => {
//       return {
//          props: {},
//       }
//    })
// )


export default Post
