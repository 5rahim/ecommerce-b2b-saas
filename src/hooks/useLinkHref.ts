import { useStoreQuery } from '@/graphql/hocs/withStore'
import { useUserQuery } from '@/graphql/hocs/withUser'

const useLinkHref = () => {
   
   const store = useStoreQuery()
   const user = useUserQuery()
   
   return {
      getOwnStoreHref: () => {
         if(!user?.profile?.stores)
            return '/get-started'
         return `/store/${user?.profile?.stores[0]?.sid}`
      },
      getStoreLinkTo: (href: string) => {
         if(!store)
            return '#'
         return `/store/${store?.sid}${href}`
      },
      getOwnProfileHref: () => {
         return `/profile/${user?.profile?.id}`
      },
      getOwnOrdersHref: () => {
         return `/profile/${user?.profile?.id}/orders`
      },
      getLoginHref: () => {
         return `/api/auth/login`
      },
      getLogoutHref: () => {
         return `/api/auth/logout`
      },
   }
   
}

export default useLinkHref
