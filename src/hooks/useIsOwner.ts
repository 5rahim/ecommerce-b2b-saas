import { useStoreQuery } from '@/graphql/hocs/withStore'
import { useUserQuery } from '@/graphql/hocs/withUser'
import { useUser as useAuth0User } from '@auth0/nextjs-auth0/dist/frontend/use-user'

function useIsOwner() {
   
   // const store = useCurrentStore()
   // const user = useCurrentUser()
   const session = useAuth0User()
   const user = useUserQuery()
   const store = useStoreQuery()
   
   if(session.isLoading)
      return [false, true]
   else {
      if(store && user.profile) {
         return [store?.user?.id === user.profile?.id, false]
      } else if(!user.profile && !store) {
         return [false, true]
      } else if (store && !user.isLoading && !user.profile) {
         return [false, false]
      }
   }
   
   
   return [false, true]
   
}

export default useIsOwner
