import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'

export default function useStoreHelpers() {
   
   const t = useTypeSafeTranslation()
   
   return {
      getDefaultBackground: (category: string) => {
         return `/assets/images/store_backgrounds/${category}.jpg`
      }
      
   }
}
