import Footer from '@/components/common/Footer'
import Head from '@/components/common/Head'
import StoreNavbar from '@/components/common/Navbar/StoreNavbar'
import HideIfOwner from '@/components/common/Role/HideIfOwner'
import ShowIfOwner from '@/components/common/Role/ShowIfOwner'
import OwnerSidebar from '@/components/ui/OwnerSidebar'
import { useStoreQuery } from '@/graphql/hocs/withStore'
import { AppSelectors } from '@/store/slices/appSlice'
import { Utils } from '@/utils/index'
import { Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import { NProgress } from '@saas-ui/react'
import NextImage from 'next/image'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'


interface StoreLayoutProps {
   withFocus?: boolean
}

const StoreLayout: React.FC<StoreLayoutProps> = (props) => {
   
   const { children, withFocus, ...rest } = props
   
   // const user = useCurrentUser()
   const store = useStoreQuery()
   const mutationIsLoading = useSelector(AppSelectors.mutationIsLoading)
   
   const page = useMemo(() => (
         <Box
            minH="100vh"
            bgColor="gray.50"
            backgroundImage={Utils.Url.assetImageUrl('topography.png', 'patterns')}
            backgroundBlendMode={"darken"}
         >
            <Head />
            
            <StoreNavbar />
            
            <Box
               maxW="1200px"
               margin="0 auto"
               p={6}
               // bgColor="#fff"
            >
               
               
               {!withFocus && <Box
                   w="100%"
                   h={{ base: "120px", sm: "120px", md: "120px", lg: "120px", xl: "160px" }}
                   overflow="hidden"
                   position="relative"
                   mb="4"
                   mt={-6}
                   borderBottomRadius="md"
               >

                   <NextImage
                       src={`/assets/images/store_backgrounds/${store.category}.jpg`}
                       alt={`Store background`}
                       layout="fill"
                       objectFit="cover"
                       quality={50}
                       objectPosition="center"
                   />
               </Box>}
               
               <SimpleGrid
                  as="main"
                  gap="4"
                  p="0"
                  m="0"
                  className="fit"
               >
                  {children}
                  <Footer />
               </SimpleGrid>
            
            
            </Box>
         </Box>
      )
   , [])
   
   return (
      <>
   
         <NProgress
            isAnimating={mutationIsLoading}
            colorScheme="brand"
            position="absolute"
            height="8px"
         />
         
         <Box
            position="fixed"
            right=".5rem"
            top=".5rem"
            zIndex="9999"
            bgColor="gray.700"
            w="40px"
            h="40px"
            borderRadius="md"
            color="#fff"
            display={mutationIsLoading ? "flex" : "none"}
            alignItems="center"
            justifyContent="center"
         >
            <Spinner size="md" />
         </Box>
         
         <ShowIfOwner>
            <OwnerSidebar>
               {page}
            </OwnerSidebar>
         </ShowIfOwner>
         
         <HideIfOwner>
            {page}
         </HideIfOwner>
      
      </>
   )
   
}

export default StoreLayout
