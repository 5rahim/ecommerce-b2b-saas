import NextLink from '@/components/common/Links/NextLink'
import RouteLink from '@/components/common/Links/RouteLink'
import UserDropdown from '@/components/common/Navbar/StoreNavbar/UserDropdown'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, HStack, IconButton, Image, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

const CountrySelector = dynamic(() => import('@/components/ui/CountrySelector'), { ssr: false })

const SellerLinks = [
   ['Marketplace', '/'],
   ['Features', '#features'],
   ['Pricing', '#pricing'],
   ['About', '#about'],
   ['Team', '#team'],
]
const MarketplaceLinks = []

const NavLink = ({ children, data }: { children: ReactNode, data: any }) => (
   <RouteLink
      to={data[1]} px={2}
      py={1}
      rounded={'md'}
      _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
      }}
   >
      
      {children}
   </RouteLink>
)

const Index: React.FC<{ marketplace: boolean }> = ({ marketplace }) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { locale, locales, route } = useRouter()
   const otherLocale = locales?.find((cur) => cur !== locale)
   const router = useRouter()
   const t = useTypeSafeTranslation()
   
   return (
      <>
         <Box bg="#FFF" px={4} borderBottom="1px solid" borderColor="gray.200">
            <Container maxW="container.xl">
               <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <IconButton
                     size={'md'}
                     icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                     aria-label={'Open Menu'}
                     display={{ md: 'none' }}
                     onClick={isOpen ? onClose : onOpen}
                  />
                  <HStack spacing={8} alignItems={'center'}>
                     <RouteLink to="/">
                        <Image src="/assets/images/logo.svg" maxHeight="20px" />
                     </RouteLink>
                     <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                     >
                        {( marketplace ? MarketplaceLinks : SellerLinks ).map((link) => (
                           <NavLink data={link} key={link[0]}>{link[0]}</NavLink>
                        ))}
                     </HStack>
                  </HStack>
                  <Flex alignItems={'center'}>
   
                     <NextLink
                        href='/'
                        locale={router.locale === 'en' ? 'fr' : 'en'}
                     >
                        <button>
                           {t('change-locale')}
                        </button>
                     </NextLink>
                     
                     {marketplace && <NextLink href="/seller">
                         <Button
                             variant={'solid'}
                             colorScheme={'yellow'}
                             size={'md'}
                             mr={4}
                         >
                             Create my store
                         </Button>
                     </NextLink>}
                     
                     <CountrySelector />
                     
                     <UserDropdown />
                  </Flex>
               </Flex>
               
               {isOpen ? (
                  <Box pb={4} display={{ md: 'none' }}>
                     <Stack as={'nav'} spacing={4}>
                        {( marketplace ? MarketplaceLinks : SellerLinks ).map((link) => (
                           <NavLink data={link} key={link[0]}>{link[0]}</NavLink>
                        ))}
                     </Stack>
                  </Box>
               ) : null}
            </Container>
         </Box>
      </>
   )
}

export default Index
