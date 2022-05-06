import { Dropzone } from '@/components/ui/Dropzone/Dropzone'
import { GET_STORE, useStoreQuery } from '@/graphql/hocs/withStore'
import { GET_USER_BY_USER_ID } from '@/graphql/hocs/withUser'
import { StoreServices } from '@/graphql/services/stores.services'
import UserServices from '@/graphql/services/users.services'
import useCurrentUser from '@/hooks/useCurrentUser'
import { useFormFileUpload } from '@/hooks/useFormFileUpload'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Box, Divider, FormLabel, Heading, Input } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Field, Form, FormLayout, SubmitButton } from '@saas-ui/react'
import React from 'react'
import * as yup from 'yup'

interface GeneralSettingsProps {

}

const GeneralSettings: React.FC<GeneralSettingsProps> = (props) => {
   
   const { children, ...rest } = props
   const user = useCurrentUser()
   const store = useStoreQuery()
   const t = useTypeSafeTranslation()
   
   const { populateFiles, hasFiles, uploadFiles, isUploading, deleteFiles } = useFormFileUpload("single")
   
   const [updateProfilePicture] = UserServices.updateProfilePicture({
      refetchQueries: [
         { query: GET_USER_BY_USER_ID, variables: { user_id: user?.profile?.user_id } },
      ],
      onCompleted: data => {
         deleteFiles()
      }
   })
   const [updateNames] = UserServices.updateNames({
      refetchQueries: [
         { query: GET_USER_BY_USER_ID, variables: { user_id: user?.profile?.user_id } },
      ],
   })
   const [updateStoreName] = StoreServices.updateStoreName({
      refetchQueries: [
         { query: GET_STORE, variables: { sid: store?.sid } },
      ],
   })
   
   const schema = yup.object().shape({
      first_name: yup.string().required().min(2).trim().label(t('field')),
      last_name: yup.string().required().min(2).trim().transform(function (value, originalvalue) {
         return this.isType(value) && value !== null ? value.charAt(0).toUpperCase() + value.slice(1) : value
      }).label(t('field')),
   })
   const storeInfoSchema = yup.object().shape({
      name: yup.string().required().min(4).trim().label(t('field')),
   })
   
   const profilePictureSchema = yup.object().shape({
      files: yup.object().label(t('field')),
   })
   
   function saveHandler(data) {
      updateNames({ id: user.profile.id, ...data })
   }
   
   async function handleSaveProfilePicture(data) {
      let picture
      let update = false
      
      if (!hasFiles) {
         update = false
         picture = user.profile.picture
      } else {
         const uploadRes = await uploadFiles()
         
         if (uploadRes) {
            picture = uploadRes.url
            update = true
         }
      }
      
      if (update) {
         updateProfilePicture({ id: user.profile.id, picture })
      }
      
   }
   
   function handleSaveStoreInfo(data) {
      updateStoreName({ id: store.id, ...data })
   }
   
   return (
      <>
         <Form resolver={yupResolver(schema)} onSubmit={saveHandler}>
            <FormLayout>
               <Heading size="md">{t('form:general.title')}</Heading>
               <FormLayout columns={2}>
                  <Field
                     name="first_name"
                     label={t('form:general.first_name')}
                     defaultValue={user?.profile?.first_name}
                  />
                  <Field
                     name="last_name"
                     label={t('form:general.last_name')}
                     defaultValue={user?.profile?.last_name}
                  />
               </FormLayout>
               
               <Field isReadOnly opacity=".7" name="email" label={t('form:general.email')} defaultValue={user?.profile?.email} />
               
               <SubmitButton colorScheme="yellow" disableIfUntouched disableIfInvalid label={t('form:save')} />
            </FormLayout>
         </Form>
         
         <Divider my="6" />
         
         <Heading size="md" mb="4">{t('form:general.profile_picture')}</Heading>
         
         <Form resolver={yupResolver(profilePictureSchema)} onSubmit={handleSaveProfilePicture}>
            <FormLayout>
               
               <Dropzone
                  multiple={false}
                  disabled={isUploading}
                  onChange={populateFiles}
                  accept={['image/png', 'image/jpg', 'image/jpeg']}
               />
            
            </FormLayout>
            
            <SubmitButton isLoading={isUploading} isDisabled={!hasFiles} mt="2" colorScheme="yellow" label={t('form:save')} />
         </Form>
         
         <Divider my="6" />
         
         <Heading size="md" mb="4">{t('store')}</Heading>
         
         <Form resolver={yupResolver(storeInfoSchema)} onSubmit={handleSaveStoreInfo}>
            <FormLayout>
               <Field
                  name="name"
                  label={t('form:store.name')}
                  defaultValue={store?.name}
               />
               
               <Box>
                  <FormLabel>{t('form:store.url')}</FormLabel>
                  <Input
                     isDisabled
                     name="sid"
                     // label={t('form:store.url')}
                     defaultValue={'https://mosu.app/' + store?.sid}
                  />
               </Box>
               
               <SubmitButton colorScheme="yellow" disableIfUntouched disableIfInvalid label={t('form:save')} />
            </FormLayout>
         </Form>
      
      </>
   )
   
}

export default GeneralSettings
