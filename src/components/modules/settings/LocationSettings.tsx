// import AddressAutocomplete from '@/components/ui/Form/AddressAutocomplete'
import AddressAutocomplete from '@/components/ui/Form/AddressAutocomplete'
// import MapWithMarker from '@/components/ui/GoogleMaps/MapWithMarker'
import { GET_STORE, useStoreQuery } from '@/graphql/hocs/withStore'
import { StoreServices } from '@/graphql/services/stores.services'
import useStoreSettings, { StoreSettings } from '@/hooks/useStoreSettings'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Divider, Heading, Text } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { DisplayIf, Field, Form, FormLayout, SubmitButton } from '@saas-ui/react'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

const MapWithMarker = dynamic(() => import("@/components/ui/GoogleMaps/MapWithMarker"))

interface LocationSettingsProps {

}

const LocationSettings: React.FC<LocationSettingsProps> = (props) => {
   const t = useTypeSafeTranslation()
   const { children, ...rest } = props
   const store = useStoreQuery()
   const [address, setAddress] = useState(null)
   const { getStoreSetting } = useStoreSettings()
   const [latLng, setLatLng] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 })
   
   const addressSchema = yup.object().shape({})
   
   const [updateStoreAddress] = StoreServices.updateStoreAddress({
      refetchQueries: [
         { query: GET_STORE, variables: { sid: store?.sid } },
      ],
      onCompleted: data => {
         setAddress(null)
      },
   })
   const [updateStoreSettings] = StoreServices.updateStoreSettings({
      refetchQueries: [
         { query: GET_STORE, variables: { sid: store?.sid } },
      ],
      onCompleted: data => {
      },
   })
   
   function handleSaveAddress(data) {
      console.log(address)
      if (address) {
         updateStoreAddress({ id: store?.id, address: address.label })
      }
   }
   
   const getLatLng = () => {
      let lat = 0, lng = 0, placeId
      try {
         new window.google.maps.Geocoder().geocode({ 'address': `${store.address}` }, function (results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
               placeId = results[0].place_id
               lat = results[0].geometry.location.lat()
               lng = results[0].geometry.location.lng()
               setLatLng({ lat, lng })
            } else {
               alert('Geocode was not successful for the following reason: ' + status)
            }
         })
      }
      catch (e) {
      
      }
      return { lat, lng }
   }
   const [show, setShow] = useState<boolean>(false)
   
   useEffect(() => {
      getLatLng()
   }, [store, show, address])
   
   
   useEffect(() => {
      setShow(true)
   }, [store])
   
   function handleSavePhysicalAddress(data) {
      console.log(data)
      updateStoreSettings({
         id: store?.id,
         settings: {
            ...store?.settings,
            hasPhysicalAddress: data.physical_address,
            physicalAddressDirections: data.directions,
         },
      })
   }
   
   return (
      <>
         <Form resolver={yupResolver(addressSchema)} onSubmit={handleSaveAddress}>
            <FormLayout>
               <Heading size="md">{t('form:address')}</Heading>
               
               <Text>{store?.address}</Text>
               
               <FormLayout>
                  
                  {( show && latLng.lng !== 0 ) && <MapWithMarker latLng={latLng} />}
                  
                  <AddressAutocomplete value={address} onChange={setAddress} />
               
               </FormLayout>
               
               <SubmitButton isDisabled={!address} colorScheme="yellow" label={t('form:save')} />
            </FormLayout>
         </Form>
         
         <Divider my="6" />
         
         <Form
            // defaultValues={{
            //    'physical_address': getStoreSetting<StoreSettings['hasPhysicalAddress']>(store, settings => settings.hasPhysicalAddress, false),
            //    'directions': getStoreSetting<StoreSettings['physicalAddressDirections']>(store, settings => settings.physicalAddressDirections,
            // null) }}
            onSubmit={handleSavePhysicalAddress}
         >
            
            <FormLayout>
               
               <Field
                  type="switch"
                  name="physical_address"
                  // size="lg"
                  colorScheme="brand"
                  defaultChecked={getStoreSetting<StoreSettings['hasPhysicalAddress']>(store, settings => settings.hasPhysicalAddress, false)}
                  label={t('form:location.physical_address_question')}
               />
               
               <DisplayIf
                  name="physical_address"
                  defaultValue={getStoreSetting<StoreSettings['hasPhysicalAddress']>(store, settings => settings.hasPhysicalAddress, false)}
                  condition={(physical_address) => !!physical_address}
               >
                  <FormLayout>
                     <Heading size="md">
                        {t('form:location.directions')}
                     </Heading>
                     <FormLayout>
                        <Field
                           type="textarea"
                           name="directions"
                           placeholder={`${t('form:location.in_addition_to')} ${store?.address}`}
                           defaultValue={getStoreSetting<StoreSettings['physicalAddressDirections']>(store, settings => settings.physicalAddressDirections, null)}
                        />
                     </FormLayout>
                  </FormLayout>
               </DisplayIf>
               
               <SubmitButton colorScheme="yellow" disableIfUntouched label={t('form:save')} />
            
            </FormLayout>
         
         </Form>
      
      </>
   )
   
}

export default LocationSettings
