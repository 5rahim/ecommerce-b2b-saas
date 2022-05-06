import HideIfOwner from '@/components/common/Role/HideIfOwner'
import { Badge, Box, Button, HStack, Icon } from '@chakra-ui/react'
import { BiBasket } from '@react-icons/all-files/bi/BiBasket'
import React from 'react'

interface CartNavbarButtonProps {

}

const CartNavbarButton: React.FC<CartNavbarButtonProps> = (props) => {
   
   const { children, ...rest } = props
   
   return (
      <>
         <HideIfOwner>
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
               <Box position="relative">
                  <Button
                     variant="link"
                     leftIcon={<Icon fontSize="2xl" as={BiBasket} />}
                     size="lg"
                     color="black"
                  >
                     Panier
                  </Button>
                  <Badge position="absolute" top="-3" left="4" variant="solid" colorScheme="red">
                     8
                  </Badge>
               </Box>
            </HStack>
         </HideIfOwner>
      </>
   )
   
}

export default CartNavbarButton
