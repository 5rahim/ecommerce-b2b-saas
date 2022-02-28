import { gql, useQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/react'

export const ALL_POSTS_QUERY = gql`
  query posts {
    posts {
      id
      text
    }
  }
`


export default function PostList() {
   const { loading, error, data, fetchMore, networkStatus } = useQuery(
      ALL_POSTS_QUERY,
      {
         // Setting this value to true will make the component rerender when
         // the "networkStatus" changes, so we are able to know if it is fetching
         // more data
         notifyOnNetworkStatusChange: true,
      },
   )
   
   
   if (error) return <>Error</>
   
   // if(typeof window === 'undefined') return <></>
   
   console.log(data)
   const { posts } = data ?? { posts: [] }
   
   
   return (
      <div>
         <ul>
            {posts?.map((post, index) => (
               <li key={post.id}>
                  <Flex>
                     <span>{index + 1}. </span>
                     <p>{post.text}</p>
                  </Flex>
               </li>
            ))}
         </ul>
      </div>
   )
}
