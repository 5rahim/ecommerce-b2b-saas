import { gql } from '@apollo/client'

export const POST_QUERY = gql`
  query posts($id: uuid!) {
    posts(where: { id: { _eq: $id } }) {
      id
      text
    }
  }
`
