import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { CloseIcon } from '@chakra-ui/icons'
import { Button, Icon, IconButton, Text } from '@chakra-ui/react'
import { FiFolder } from '@react-icons/all-files/fi/FiFolder'
import { Card, CardBody, CardFooter, useLocalStorage } from '@saas-ui/react'
import React from 'react'

interface AddCategoriesBannerProps {

}

const AddCategoriesBanner: React.FC<AddCategoriesBannerProps> = (props) => {
   
   const { children, ...rest } = props
   const t = useTypeSafeTranslation()
   // const {} = useLocalStorage('helpers.hide_sharable_link_card', false)
   const [value, setValue] = useLocalStorage('mosu.banners.add_categories', false)
   
   
   return (
      <>
         <ShowIfOwner>
            {!value && <Card
                title={t('cards:banner.add_categories.title')}
                bg="#fff"
                action={<IconButton
                   icon={<CloseIcon onClick={() => setValue(true)} />}
                   _hover={{ bgColor: "transparent" }}
                   _active={{ bgColor: "transparent" }}
                   aria-label="close"
                />}
                avatar={<Icon as={FiFolder} w={8} h={8} color="green.500" />}
            >
                <CardBody py="0">
                    <Text fontSize="md">{t('cards:banner.add_categories.description')}</Text>
                </CardBody>
                <CardFooter>
                    <Button variant="link" colorScheme="green">
                       {t('cards:banner.add_categories.action')}
                    </Button>
                </CardFooter>
            </Card>}
         </ShowIfOwner>
      </>
   )
   
}

export default AddCategoriesBanner
