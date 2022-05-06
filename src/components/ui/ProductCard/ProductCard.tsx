import { Box, chakra, Flex, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { FiShoppingCart } from '@react-icons/all-files/fi/FiShoppingCart'
import NextImage from 'next/image'

const data = {
   isNew: true,
   imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
   name: 'Versace glasses',
   price: 10000,
}

function ProductCard() {
   return (
      <Flex w="full" alignItems="center" justifyContent="center">
         <Box
            bg={useColorModeValue('white', 'gray.800')}
            width="100%"
            rounded="xl"
            // borderWidth="1px"
            position="relative"
         >
            
            <Box
               w="100%"
               h={{ base: "200px", sm: "200px", md: "200px", lg: "200px", xl: "220px" }}
               overflow="hidden"
               position="relative"
               borderRadius="md"
               mb="2"
            >
               
               <NextImage
                  src={data.imageURL}
                  alt={`Picture of ${data.name}`}
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                  objectPosition="center"
               />
            </Box>
            
            
            <Box p="0">
               <Flex mt="1" justifyContent="space-between" alignContent="center">
                  <Box
                     fontSize="lg"
                     fontWeight="semibold"
                     as="h4"
                     lineHeight="tight"
                     isTruncated
                  >
                     {data.name}
                  </Box>
               </Flex>
               
               <Flex justifyContent="space-between" alignContent="center">
                  <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
                     <Box as="span" color={'gray.600'} fontSize="lg">
                        $
                     </Box>
                     {data.price.toFixed(2)}
                  </Box>
                  
                  <Tooltip
                     label="Ajouter au panier"
                     bg="white"
                     placement={'top'}
                     color={'gray.800'}
                     fontSize={'1em'}
                  >
                     <chakra.a href={'#'} display={'flex'}>
                        <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
                     </chakra.a>
                  </Tooltip>
               </Flex>
            </Box>
         </Box>
      </Flex>
   )
}

export default ProductCard
