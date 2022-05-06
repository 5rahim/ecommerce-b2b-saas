import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { setLocale } from 'yup'
import { fr } from 'yup-locales'


export const useTypeSafeTranslation = (translations?: string[]) => {
   const router = useRouter()
   const { t } = useTranslation(['shared', ...(translations ?? [])], { useSuspense: false })
   
   if(router.locale === 'fr') {
      setLocale(fr)
   }
   
   return t
}
