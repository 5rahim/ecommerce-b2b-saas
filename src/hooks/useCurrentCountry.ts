import { useAppSelector } from '@/store/index'
import { CountrySelectors } from '@/store/slices/countrySlice'

export default function useCurrentCountry() {
   return useAppSelector(CountrySelectors.currentCountry)
}
