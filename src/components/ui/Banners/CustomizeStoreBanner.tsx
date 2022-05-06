import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { CloseIcon } from '@chakra-ui/icons'
import { Button, Icon, IconButton, Text } from '@chakra-ui/react'
import { BiStore } from '@react-icons/all-files/bi/BiStore'
import { Card, CardBody, CardFooter, useLocalStorage } from '@saas-ui/react'
import React from 'react'

interface CustomizeStoreBannerProps {

}

const CustomizeStoreBanner: React.FC<CustomizeStoreBannerProps> = (props) => {
   
   const { children, ...rest } = props
   
   const t = useTypeSafeTranslation()
   const [value, setValue] = useLocalStorage('mosu.banners.customize_store', false)
   
   return (
      <>
         <ShowIfOwner>
            {!value && <Card
               title={t('cards:banner.customize_store.title')}
               bg="#fff"
               // border="none"
               // boxShadow="none"
               action={<IconButton
                  icon={<CloseIcon onClick={() => setValue(true)} />}
                  _hover={{ bgColor: "transparent" }}
                  _active={{ bgColor: "transparent" }}
                  aria-label="close"
               />}
               avatar={<Icon as={BiStore} w={8} h={8} color="orange.500" />}
            >
               <CardBody py="0">
                  <Text fontSize="md">
                     {t('cards:banner.customize_store.description')}
                  </Text>
               </CardBody>
               <CardFooter>
                  <Button variant="link" colorScheme="orange" color="orange.500">
                     {t('cards:banner.customize_store.action')}
                  </Button>
               </CardFooter>
            </Card>}
         </ShowIfOwner>
      </>
   )
   
}

export default CustomizeStoreBanner
