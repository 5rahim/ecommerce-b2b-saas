import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import { CloseIcon } from '@chakra-ui/icons'
import { Button, IconButton, Text } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@saas-ui/react'
import React from 'react'

interface SharableLinkCardProps {

}

const SharableLinkCard: React.FC<SharableLinkCardProps> = (props) => {
   
   const { children, ...rest } = props
   
   // const {} = useLocalStorage('helpers.hide_sharable_link_card', false)
   
   return (
      <>
         <ShowIfOwner>
            <Card title="Recevoir le lien de partage sur votre numéro Whatsapp"
                  bg="gray.50"
                  action={<IconButton icon={<CloseIcon />} _hover={{bgColor:"blackAlpha.300"}} aria-label="close" />}
            >
               <CardBody py="0">
                  <Text fontSize="md">
                     Welcome to Saas UI, in the next steps we will walk you through all the
                     basic features of Saas UI.
                  </Text>
               </CardBody>
               <CardFooter>
                  <Button variant="solid" colorScheme="gray" color="black">
                     Continue
                  </Button>
                  <Button>Dismiss</Button>
               </CardFooter>
            </Card>
         </ShowIfOwner>
      </>
   )
   
}

export default SharableLinkCard
