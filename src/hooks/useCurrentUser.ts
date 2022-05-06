import { useUserQuery } from '@/graphql/hocs/withUser'
import { useAppSelector } from '@/store/index'
import { UserSelectors, UserState } from '@/store/slices/userSlice'
import { useEffect, useState } from 'react'

export const useCurrentUser = (): UserState => {
   
   const [user, setUser] = useState(null)
   const user2 = useUserQuery()
   const storeUser = useAppSelector(UserSelectors.getUser)
   
   useEffect(() => {
      setUser(storeUser)
   }, [storeUser])
   
   return user2
   
}

export default useCurrentUser
