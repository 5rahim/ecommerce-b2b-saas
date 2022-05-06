// import AddressAutocomplete from '@/components/ui/Form/AddressAutocomplete'
// import MapWithMarker from '@/components/ui/GoogleMaps/MapWithMarker'
import { GET_STORE, useStoreQuery } from '@/graphql/hocs/withStore'
import { StoreServices } from '@/graphql/services/stores.services'
import useCategoryHelpers from '@/hooks/useCategoryHelpers'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { FormControl, FormLabel, Heading } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, FormLayout, Select } from '@saas-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'
import * as yup from 'yup'

const MapWithMarker = dynamic(() => import("@/components/ui/GoogleMaps/MapWithMarker"))

interface LocationSettingsProps {

}

const LocationSettings: React.FC<LocationSettingsProps> = (props) => {
   const t = useTypeSafeTranslation()
   const { children, ...rest } = props
   const store = useStoreQuery()
   const { getCategoryList, getCategoryTranslatedName } = useCategoryHelpers()
   
   const categorySchema = yup.object().shape({
      category: yup.string().required()
   })
   
   const [updateStoreCategory] = StoreServices.updateStoreCategory({
      refetchQueries: [
         { query: GET_STORE, variables: { sid: store?.sid } },
      ],
      onCompleted: data => {
      },
   })
   
   return (
      <>
         <Form resolver={yupResolver(categorySchema)} onSubmit={() => console.log()}>
            <FormLayout>
               <Heading size="md">{t('catalogue')}</Heading>
               
               <FormControl>
                  <FormLabel>{t('form:product_type')}</FormLabel>
                  <Select
                     name="category"
                     placeholder={t('form:select.category')}
                     defaultValue={store.category}
                     options={getCategoryList().map((category, index) => ({ label: getCategoryTranslatedName(category), value: category }))}
                     onChange={(value) => {
                        updateStoreCategory({
                           id: store?.id,
                           category: value as string
                        })
                     }}
                  />
               </FormControl>
            </FormLayout>
         </Form>
      
      
      </>
   )
   
}

export default LocationSettings
