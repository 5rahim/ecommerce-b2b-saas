import { UserState } from '@/store/slices/userSlice'

export const useNameFormatter = () => {
   
   return {
      formatFullName: (user: UserState) => {
         return user?.profile?.first_name + ' ' + user?.profile?.last_name
      }
   }
   
}
