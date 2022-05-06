import StoreLayout from '@/components/common/Layouts/StoreLayout'
import SEO from '@/components/common/SEO'
import TabMenuItem from '@/components/ui/Tabs/TabMenuItem'
import withStore, { useStoreQuery } from '@/graphql/hocs/withStore'
import withUser from '@/graphql/hocs/withUser'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import withApollo from '@/lib/withApollo'
import { Box, Divider, Heading, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { AiOutlineWhatsApp } from '@react-icons/all-files/ai/AiOutlineWhatsApp'
import { FiClipboard } from '@react-icons/all-files/fi/FiClipboard'
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin'
import { FiTag } from '@react-icons/all-files/fi/FiTag'
import { FiTool } from '@react-icons/all-files/fi/FiTool'
import { Card } from '@saas-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'

const CatalogueSettings = dynamic(() => import( '@/components/modules/settings/CatalogueSettings'))
const GeneralSettings = dynamic(() => import( '@/components/modules/settings/GeneralSettings'))
const LocationSettings = dynamic(() => import( '@/components/modules/settings/LocationSettings'))

const Settings = () => {
   
   const t = useTypeSafeTranslation()
   const store = useStoreQuery()
   
   
   return (
      <StoreLayout withFocus>
         <SEO title={store?.name} secondaryTitle={t('settings')} />
         
         <Card p="4">
            <Heading fontWeight="500" mb={4}>{t('settings')}</Heading>
            
            <Divider mb="4" />
            
            <Tabs>
               <Box display={{ base: 'block', md: 'flex' }}>
                  <TabList flexDirection="column" w="300px" p="0" borderBottom="none">
                     <TabMenuItem icon={FiTool}>{t('general')}</TabMenuItem>
                     <TabMenuItem icon={FiMapPin}>{t('localization')}</TabMenuItem>
                     <TabMenuItem icon={FiTag}>{t('catalogue')}</TabMenuItem>
                     <TabMenuItem icon={FiClipboard}>{t('orders')}</TabMenuItem>
                     <TabMenuItem icon={AiOutlineWhatsApp}>Whatsapp</TabMenuItem>
                  </TabList>
                  
                  <Box p={{ base: 4, md: 4 }} w="100%">
                     
                     <Box display="none">
                        {/*<MapWithMarker />*/}
                     </Box>
                     
                     <TabPanels>
                        <TabPanel p="0">
                           <GeneralSettings />
                        </TabPanel>
                        <TabPanel p="0">
                           <LocationSettings />
                        </TabPanel>
                        <TabPanel p="0">
                           <CatalogueSettings />
                        </TabPanel>
                     </TabPanels>
                  </Box>
               </Box>
            </Tabs>
         </Card>
      
      </StoreLayout>
   )
}


export const getServerSideProps = withApollo({ auth: true }, withUser(withStore({ ownerOnly: true })))

export default Settings
