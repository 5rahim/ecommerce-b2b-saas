import withApollo from '@/lib/withApollo'
import { Box, Code, Container, Divider, Flex } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import PostServices from '../../graphql/services/posts.services'


const Post = () => {
   const { t } = useTranslation()
   const router = useRouter()
   
   // const { data } = usePostsQuery({ variables: { id: router.query.id } })
   
   const { data } = PostServices.ssrGetPost.queryFromServer({ variables: { id: router.query.id } })
   const { data: allPosts } = PostServices.ssrGetAllPosts.queryFromServer()
   
   return (
      <Container height="100vh">
         <Code>TypeScript</Code>
         <Box>{data?.posts[0]?.text}</Box>
         <Divider />
         {allPosts?.posts.map((post, index) => (
            <li key={post.id}>
               <Flex>
                  <span>{index + 1}. </span>
                  <p>{post.text}</p>
               </Flex>
            </li>
         ))}
      </Container>
   )
}

export const getServerSideProps = withApollo({ auth: true },
   PostServices.ssrGetPost.serverQuery((ctx) => ( { variables: { id: ctx.params.id } } ),
      PostServices.ssrGetAllPosts.serverQuery(),
   ),
)

// export const getServerSideProps = withPage({ auth: true },
//    withPost(async (ctx, apolloClient) => {
//       return {
//          props: {},
//       }
//    })
// )


export default Post
