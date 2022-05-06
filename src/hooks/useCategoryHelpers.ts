import stores from '@/config/stores'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'

export default function useCategoryHelpers() {
   
   const t = useTypeSafeTranslation()
   
   return {
      getCategoryList: () => {
        return Object.keys(stores.categories)
      },
      
      getCategoryTranslatedName: (category: string) => {
         return t(`categories:${category}`)
      },
      
   }
}
