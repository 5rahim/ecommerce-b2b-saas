import countries from '@/config/countries'

export default function useCountryHelpers() {
   return {
      getCountryList: () => {
        return Object.keys(countries)
      },
      
      getCountryFlag: (code: string) => {
         return countries[code].flag_img
      },
      
      getCountryName: (code: string) => {
         return countries[code].name
      },
      
   }
}
