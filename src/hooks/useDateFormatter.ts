import { Parameter } from '@/types/Parameter'
import { Utils } from '@/utils/index'
import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isValid from 'date-fns/isValid'
import enUS from 'date-fns/locale/en-US'
import fr from 'date-fns/locale/fr'
import { useRouter } from 'next/router'

const getLocale = (locale: string) => locale === 'fr' ? fr : enUS


type DateFormat = "short" | "long" | "short with hours" | "long with hours"

const hour_formats: any = {
   '12': 'HH:mm',
   '24': 'hh:mm a..aa',
}

const date_formats: { [key: string]: any } = {
   short: { DMY: "dd/MM/yy", MDY: "MM/dd/yy" },
   long: { DMY: "dd MMMM yyyy", MDY: "MMMM dd, yyyy" },
   'short with hours': {
      '12': {
         DMY: "dd/MM/yy, hh:mm a",
         MDY: "MM/dd/yy, hh:mm a",
      },
      '24': {
         DMY: "dd/MM/yy, HH:mm",
         MDY: "MM/dd/yy, HH:mm",
      },
   },
   'long with hours': {
      '12': {
         DMY: "dd MMMM yyyy, hh:mm a",
         MDY: "MMMM dd, yyyy, hh:mm a",
      },
      '24': {
         DMY: "dd MMMM yyyy, HH:mm",
         MDY: "MMMM dd, yyyy, HH:mm",
      },
   },
}

export const useDateFormatter = () => {
   
   // const locale = useLocale()
   // const settings = useUserSettings()
   const {locale} = useRouter()
   
   return {
      dateToUTC: (date: any) => {
        if(!date) return 'N/A'
        return new Date(date).toISOString().replace('Z', '')
      },
      formatDate: (utcDate: Parameter<Date | string>, selected_format: DateFormat) => {
         if(utcDate) {
            const d = typeof utcDate === 'string' ? Utils.Dates.asUTC(utcDate) : utcDate
            
            if(isValid(d)) {
               const formats = date_formats[selected_format]
   
               // const date_format = settings.dateFormat ?? 'DMY'
               // const hour_format = settings.hourFormat ?? '24'
   
               if(selected_format === 'short' || selected_format === 'long') {
                  return format(d, (formats['DMY'] as string), { locale: getLocale(locale) })
               }
               if(selected_format === 'short with hours' || selected_format === 'long with hours') {
                  return format(d, (formats['24']['DMY'] as string), { locale: getLocale(locale) })
               }
            }
            
         } else {
            return 'N/A'
         }
      },
      formatDistanceToNow: (utcDate: Parameter<Date | string>, options?: any) => {
         if(utcDate) {
            const d = typeof utcDate === 'string' ? Utils.Dates.asUTC(utcDate) : utcDate
            
            if(isValid(d)) {
               return formatDistanceToNow(d, { locale: getLocale(locale), ...options })
            }
            
         } else {
            return 'N/A'
         }
      },
   }
   
}
