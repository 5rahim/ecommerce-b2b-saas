import { ServiceBuilder } from '@/graphql/utils/ServiceBuilder'
import { gql } from '@apollo/client'
import { GetAllPostsQuery, GetAllPostsQueryVariables, PostsQuery, PostsQueryVariables } from '../../generated/graphql'

const PostServices = {
    ssrGetPost: ServiceBuilder.createSSRQuery<PostsQueryVariables, PostsQuery>({
       table: 'posts',
        document: gql`
          query posts($id: uuid!) {
            posts(where: { id: { _eq: $id } }) {
              id
              text
            }
          }
        `,
       debug: true,
    }),
    ssrGetAllPosts: ServiceBuilder.createSSRQuery<GetAllPostsQueryVariables, GetAllPostsQuery>({
       table: 'posts',
        document: gql`
          query GetAllPosts {
            posts {
              id
              text
            }
          }`,
       debug: true,
    }),
}

export default PostServices
