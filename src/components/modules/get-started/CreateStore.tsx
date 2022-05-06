import AddressAutocomplete from '@/components/ui/Form/AddressAutocomplete'
import { useUserQuery } from '@/graphql/hocs/withUser'
import { StoreServices } from '@/graphql/services/stores.services'
import useCategoryHelpers from '@/hooks/useCategoryHelpers'
import useCountryHelpers from '@/hooks/useCountryHelpers'
import useCurrentCountry from '@/hooks/useCurrentCountry'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useFormCreator } from '@/hooks/useFormCreator'
import useStoreHelpers from '@/hooks/useStoreHelpers'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Utils } from '@/utils/index'
import { useUser } from '@auth0/nextjs-auth0'
import { PhoneIcon } from '@chakra-ui/icons'
import {
   Box, Button, Flex, FormControl, FormHelperText, FormLabel, Icon, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Select, Text,
} from '@chakra-ui/react'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import _ from 'lodash'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { CreateStoreMutation } from '../../../generated/graphql'

const CreateStore = () => {
   const { getCountryName, getCountryList } = useCountryHelpers()
   const { getCategoryList, getCategoryTranslatedName } = useCategoryHelpers()
   const { getDefaultBackground } = useStoreHelpers()
   const { getCountryFlag } = useCountryHelpers()
   const session = useUser()
   const t = useTypeSafeTranslation()
   const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
      initialStep: 0,
   })
   const [address, setAddress] = useState(null)
   const [country, setCountry] = useState(null)
   const router = useRouter()
   const currentCountry = useCurrentCountry()
   const [storeName, setStoreName] = useState(null)
   const [storeUrl, setStoreUrl] = useState(null)
   const [invalidStoreUrl, setInvalidStoreUrl] = useState<boolean>(false)
   
   const [fetchStoreCountBySID, storeCountBySID, storeCountLoading] = StoreServices.getStoreCountBySID.clientLazyQuery()
   const [createStore, createStoreLoading] = StoreServices.createStore({
      onCompleted: (data: CreateStoreMutation) => {
         console.log(data.insert_stores_one.sid)
         router.push(`/store/${storeUrl}`)
      },
   })
   
   const userQuery = useUserQuery()
   
   const user = useCurrentUser()
   
   
   // useEffect(() => {
   //    console.log(storeCount?.aggregate.count)
   // }, [storeCount])
   
   const { onFormSubmit, fields, formState } = useFormCreator({
      schema: ({ z }) => z.object({}),
      onSubmit: async data => {
         
         const store_id = uuid()
         const store_subscription_id = uuid()
         
         const insert_store_data = {
            store_id: store_id,
            name: storeName,
            sid: storeUrl,
            category: fields.watch('category'),
            country: fields.watch('country'),
            phone: fields.watch('phone'),
            address: address.label,
            theme: {},
            trial_ends: Utils.Dates.endOfTrialDate(new Date()),
            user_id: user.profile.id,
         }
         
         const insert_store_subscription_data = {
            store_subscription_id: store_subscription_id,
            store_id: store_id,
            subscription_id: '65097a72-5151-47dc-b842-19882dd9cdd3',
            created_at: new Date(),
            status: 'trialing',
            price_id: '0',
            quantity: 1,
         }
         
         createStore({ ...insert_store_data, ...insert_store_subscription_data })
         
         
      },
   })
   
   function cleanUrl(storeName: string | undefined | null) {
      // if(!storeName) return ""
      const e = storeName?.toLowerCase()?.replaceAll(/\s/g, '')
      return _.deburr(e).replaceAll(/[^a-zA-Z_]+/g, '')
   }
   
   const urlIsIncorrect = !!storeUrl && !!storeName && !cleanUrl(storeUrl)?.includes(cleanUrl(storeName))
   
   const FirstStep = (
      <Box py={4}>
         <Text mb="3">{t('page.welcome %name', { name: user?.profile?.first_name })}</Text>
         
         <FormControl mb="3">
            <FormLabel>{t('form:store.name')}</FormLabel>
            <Input
               {...fields.register('name', { placeholder: "store.name" })}
               value={storeName}
               onChange={(e) => {
                  setStoreName(e.target.value)
               }}
               onBlur={() => {
                  if (!storeUrl) setStoreUrl(cleanUrl(storeName))
               }}
            />
         </FormControl>
         
         <FormControl mb="3">
            <FormLabel>{t('form:store.url')}</FormLabel>
            {urlIsIncorrect && <Text mb="1" color="orange.500">{t('form:store.invalid_url')}</Text>}
            {!storeCountLoading && invalidStoreUrl && <Text mb="1" color="red.500">{t('form:store.url_already_taken')}</Text>}
            <InputGroup>
               <InputLeftAddon children="https://mosu.app/store/" />
               <Input
                  isInvalid={invalidStoreUrl}
                  isDisabled={!storeName}
                  {...fields.register('url', { placeholder: "" })}
                  defaultValue={cleanUrl(storeName)}
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(cleanUrl(e.target.value))}
               />
            </InputGroup>
            <FormHelperText>{t('form:store.url_field_info')}</FormHelperText>
         </FormControl>
         
         <FormControl mb="3">
            <FormLabel>{t('form:what_country')}</FormLabel>
            <Select
               {...fields.register('country')}
               placeholder={t('form:select.country')}
               onChange={(e) => setCountry(e.target.value)}
            >
               {getCountryList().map((country, cid) => (
                  <option
                     key={`option-${cid}`}
                     value={country}
                  >
                     {getCountryName(country)}
                  </option>
               ))}
            </Select>
         </FormControl>
         
         <FormControl mb="3">
            <FormLabel>{t('form:product_type')}</FormLabel>
            <Select {...fields.register('category')} placeholder={t('form:select.category')}>
               {getCategoryList().map((category, index) => (
                  <option
                     key={category}
                     value={category}
                  >
                     {getCategoryTranslatedName(category)}
                  </option>
               ))}
            </Select>
         </FormControl>
      </Box>
   )
   
   const SecondStep = useMemo(() => (
      <Box py={4}>
         
         <FormControl mb="3">
            <FormLabel>{t('form:email')}</FormLabel>
            <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={MdEmail} color="gray.300" />}
               />
               <Input isReadOnly {...fields.register('email', { placeholder: session.user.email })} defaultValue={session.user.email} />
            </InputGroup>
         </FormControl>
         
         <FormControl mb="6">
            <FormLabel>{t('form:whatsapp_number')}</FormLabel>
            <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
               />
               <Input {...fields.register('phone')} type="tel" placeholder="Ex: +22507076745" />
            </InputGroup>
            <FormHelperText>{t('form:whatsapp_number_info')}</FormHelperText>
         </FormControl>
         
         {/*<FormControl mb="3" display="flex" alignItems="center">*/}
         {/*   <FormLabel htmlFor="has_physical_address" mb="0">*/}
         {/*      La boutique vend */}
         {/*   </FormLabel>*/}
         {/*   <Switch {...fields.register('online_products', { defaultChecked: true, defaultIsChecked: true })} id="email-alerts" />*/}
         {/*</FormControl>*/}
         
         <FormControl
            mb="3"
            // display={fields.watch('has_physical_address', true) === true ? "block" : "none"}
         >
            <FormLabel>{t('form:address')}</FormLabel>
            
            <AddressAutocomplete value={address} onChange={setAddress} />
            
            <FormHelperText>{t('form:address_field_info')}</FormHelperText>
         
         
         </FormControl>
      
      </Box>
   ), [currentCountry, country, address, setAddress])
   
   function handleCheckSID() {
      fetchStoreCountBySID({ variables: { sid: storeUrl } })
      setInvalidStoreUrl(false)
   }
   
   useEffect(() => {
      console.log(storeCountLoading, storeCountBySID)
      if (!storeCountLoading && !!storeCountBySID && storeCountBySID?.aggregate?.count === 0) {
         setStep(1)
         setInvalidStoreUrl(false)
      } else if (!!storeCountBySID) {
         setInvalidStoreUrl(true)
      }
   }, [storeCountLoading, storeCountBySID])
   
   const content = useMemo(() => (
      <Box mt="3">
         <Box
            w="100%"
            h="250px"
            overflow="hidden"
            position="relative"
            borderRadius="lg"
            mb="4"
         >
            <Box
               position="absolute"
               bottom="0"
               w="100%"
               p="5"
               bgColor="rgba(0,0,0,0.7)"
               color="white"
               zIndex="2"
            >
               <Text fontWeight="700" fontSize="3xl">{storeName}</Text>
               <Text fontWeight="400" fontSize="md">{getCategoryTranslatedName(fields.watch('category'))}</Text>
               <Text fontWeight="400" fontSize="md">{fields.watch('phone')}</Text>
               <Text fontWeight="500" fontSize="md">{address?.label}</Text>
            </Box>
            <Image
               position="absolute"
               bottom="5"
               right="5"
               zIndex="2"
               boxSize="2rem"
               borderRadius="full"
               src={getCountryFlag(currentCountry)}
               alt={currentCountry}
            />
            <NextImage
               src={getDefaultBackground(fields.watch('category'))}
               alt="Centre d'incubation"
               layout="fill"
               objectFit="cover"
               quality={50}
               objectPosition="center"
            />
         </Box>
         <Box mb="4">
            <Text fontSize="xl">{t('form:store.trial_period')}</Text>
            <Text>{t('form:store.trial_period_description')}</Text>
         </Box>
      </Box>
   ), [fields])
   
   const steps = useMemo(() => [
      { label: t('form:steps.your_store'), content: FirstStep },
      { label: t('form:steps.info'), content: SecondStep },
      { label: t('form:steps.finalization'), content },
   ], [country, address, fields])
   
   return (
      <Flex flexDir="column" width="100%">
         
         
         <form onSubmit={onFormSubmit}>
            
            <Steps activeStep={activeStep}>
               {steps.map(({ label, content }) => (
                  <Step label={label} key={label}>
                     {content}
                  </Step>
               ))}
            </Steps>
            
            
            {activeStep === steps.length ? (
               <Flex p={4}>
                  <Button mx="auto" size="sm" onClick={reset}>
                     Reset
                  </Button>
               </Flex>
            ) : (
               <Flex width="100%" justify="flex-end" align="center">
                  <Button
                     isDisabled={activeStep === 0 || createStoreLoading}
                     mr={4}
                     onClick={prevStep}
                     size="sm"
                     variant="ghost"
                  >
                     {t('form:button.prev')}
                  </Button>
                  {activeStep === 0 &&
                  <Button
                      size="sm"
                      isDisabled={!storeName || storeName.length < 3 || !storeUrl || !fields.watch('country') || !fields.watch('category') || urlIsIncorrect}
                      onClick={handleCheckSID}
                      isLoading={storeCountLoading}
                  >
                     {t('form:button.next')}
                  </Button>}
                  {activeStep === 1 && <Button size="sm" onClick={nextStep} isDisabled={!fields.watch('phone') || !address}>
                     {t('form:button.next')}
                  </Button>}
                  {activeStep === 2 && (
                     <Button type="submit" size="md" colorScheme="brand" isLoading={createStoreLoading}>
                        {t('form:button.create_store')}
                     </Button>
                  )}
               </Flex>
            )}
         
         
         </form>
      </Flex>
   )
}

export default CreateStore
