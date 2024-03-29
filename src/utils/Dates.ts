import { Parameter } from '@/types/Parameter'
import addDays from 'date-fns/addDays'
import addMinutes from 'date-fns/addMinutes'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import format from 'date-fns/format'

export const Dates = {
   
   endOfTrialDate: (date: Date) => {
      return addDays(date, 7)
   },
   
   // /**
   //  *
   //  * @param {Date} startDate
   //  * @param {Date} endDate
   //  * @returns {DurationDateFormat}
   //  */
   // toDurationDateObject: (startDate: Date, endDate: Date): DurationDateFormat => {
   //    return {
   //       startDate: startDate,
   //       endDate: endDate,
   //    }
   // },
   //
   // /**
   //  *
   //  * @param {DurationDateFormat} date
   //  * @returns {string}
   //  */
   // durationDateObjectToString: (date: DurationDateFormat | null) => {
   //    return date ? JSON.stringify(date) : JSON.stringify({ startDate: null, endDate: null })
   // },
   
   // /**
   //  * We add Z to convert it to a UTC date so that the Date object apply the timezone correctly
   //  * We made the assumption that all the date saved to the database will be using the UTC format minus the Z
   //  * @param {string} utcDate
   //  * @returns {DurationDateFormat}
   //  */
   // parseDurationDateObject: (utcDate: Parameter<string>): DurationDateFormat => {
   //    const onlyOneDate = (utcDate && !utcDate.includes('startDate')) ?? false
   //    if(onlyOneDate && utcDate) {
   //       return {
   //          startDate: new Date(utcDate + "Z"),
   //          endDate: new Date(utcDate + "Z"),
   //       }
   //    } else if(utcDate) {
   //       return {
   //          startDate: new Date(JSON.parse(utcDate).startDate),
   //          endDate: new Date(JSON.parse(utcDate).endDate),
   //       }
   //    } else {
   //       return {
   //          startDate: null,
   //          endDate: null
   //       }
   //    }
   // },
   // parseDurationDateObjectWithoutZ: (utcDate: Parameter<string>): DurationDateFormat => {
   //    const onlyOneDate = (utcDate && !utcDate.includes('startDate')) ?? false
   //    if(onlyOneDate && utcDate) {
   //       return {
   //          startDate: new Date(utcDate),
   //          endDate: new Date(utcDate),
   //       }
   //    } else if(utcDate) {
   //       return {
   //          startDate: new Date(JSON.parse(utcDate).startDate),
   //          endDate: new Date(JSON.parse(utcDate).endDate),
   //       }
   //    } else {
   //       return {
   //          startDate: null,
   //          endDate: null
   //       }
   //    }
   // },
   
   asUTC: (date: Parameter<string>) => {
      return new Date(date + 'Z')
   },
   asUTCString: (date: Parameter<string>) => {
      return date + 'Z'
   },
   
   mergeDateAndTime(date: Parameter<Date>, time: Parameter<number>) {
      if (date && time) {
         return new Date(addMinutes(date, time).toUTCString())
      }
      return date
   },
   
   getDateOnlyFromDate(utcDate: Parameter<string>) {
      if(utcDate) {
         return new Date(utcDate + 'Z').setHours(0,0,0)
      }
      return undefined
   },
   
   getTimeInMinutesFromDate(utcDate: Parameter<string>) {
      if(utcDate) {
         const d = new Date(utcDate + 'Z')
         return d.getHours() * 60 + d.getMinutes()
      }
      return undefined
   },
   
   
   
   dateHasPassed(utcDate: Parameter<Date | string>) {
      if(utcDate) {
         return differenceInMinutes(new Date(utcDate + "Z"), new Date()) <= 0
      }
      return false
   },
   
   /**
    * @deprecated
    * @param {Date[]} dates
    * @returns {any}
    */
   getScheduleObjectFromSelectorDates(dates: Date[]) {
      if (dates) {
         let schedule: any[] = []
         
         for (const date of dates) {
            schedule = [...schedule, { day: format(date, 'iiii'), hours: [format(date, 'H:mm:ss')] }]
         }
         
         return schedule.length > 0 ? schedule?.reduce((a, v) => {
            if (a[v.day]) {
               a[v.day].hours = [...a[v.day].hours, ...v.hours]
            } else {
               a[v.day] = v
            }
            return a
            
         }, {}) : null
      } else {
         return null
      }
   },
   
}
