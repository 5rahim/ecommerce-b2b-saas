import { ServiceBuilder } from '@/graphql/utils/ServiceBuilder'
import { gql } from '@apollo/client'
import { UpdateUserProfilePictureMutation, UpdateUserProfilePictureMutationVariables } from '../../generated/graphql'

const UserServices = {
    updateProfilePicture: ServiceBuilder.createMutation<UpdateUserProfilePictureMutationVariables, UpdateUserProfilePictureMutation>({
       table: 'users',
        document: gql`
          mutation UpdateUserProfilePicture($id: uuid!, $picture: String!) {
            update_users(where: {id: {_eq: $id}}, _set: {picture: $picture}) {
              affected_rows
            }
          }
        `,
    }),
    updateNames: ServiceBuilder.createMutation<UpdateUserProfilePictureMutationVariables, UpdateUserProfilePictureMutation>({
       table: 'users',
        document: gql`
          mutation UpdateNames($id: uuid!, $first_name: String!, $last_name: String!, $email: String!) {
            update_users(where: {id: {_eq: $id}}, _set: {first_name: $first_name, last_name: $last_name, email: $email}) {
              affected_rows
            }
          }
        `,
    }),
}

export default UserServices
