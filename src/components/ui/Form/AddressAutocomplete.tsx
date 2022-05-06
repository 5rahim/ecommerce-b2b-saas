import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { useRouter } from 'next/router'
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

interface AddressAutocompleteProps {
   country?: string,
   value: any,
   onChange: (v: any) => any
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = (props) => {
   const t = useTypeSafeTranslation()
   const { children, value, onChange, country, ...rest } = props
   const {locale} = useRouter()
   return (
      <>
         <GooglePlacesAutocomplete
            apiKey={process.env.GOOGLE_MAPS_API_KEY || "AIzaSyB5pR1LHgaOvjJU2mHjeJA9BsqPOOUEm_8"}
            
            selectProps={{
               value,
               onChange: onChange,
               placeholder: !value ? t('form:enter_address') : undefined,
               noOptionsMessage: () => <>{t('form:no_address_found')}</>,
               loadingMessage: () => <>{t('form:loading')}</>
            }}
            apiOptions={{
               language: locale,
            }}
            autocompletionRequest={{
               componentRestrictions: country ? {
                  country: [country],
               } : undefined,
            }}
         />
      </>
   )
   
}

export default AddressAutocomplete
