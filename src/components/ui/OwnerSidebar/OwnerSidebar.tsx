import NextLink from '@/components/common/Links/NextLink'
import useLinkHref from '@/hooks/useLinkHref'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import {
   Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Heading, Icon, IconButton, Text, useColorModeValue, useDisclosure,
} from '@chakra-ui/react'
import { IconType } from '@react-icons/all-files'
import { BiBasket } from '@react-icons/all-files/bi/BiBasket'
import { BiCog } from '@react-icons/all-files/bi/BiCog'
import { BiMessageAlt } from '@react-icons/all-files/bi/BiMessageAlt'
import { BiPackage } from '@react-icons/all-files/bi/BiPackage'
import { BiPaintRoll } from '@react-icons/all-files/bi/BiPaintRoll'
import { FiHome } from '@react-icons/all-files/fi/FiHome'
import { FiSettings } from '@react-icons/all-files/fi/FiSettings'
import { FiTrendingUp } from '@react-icons/all-files/fi/FiTrendingUp'
import { useRouter } from 'next/router'
import { ReactNode, ReactText } from 'react'

interface LinkItemProps {
   name: string
   icon: IconType
   href: string
}


export default function SimpleSidebar({ children }: { children: ReactNode }) {
   
   
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <Box minH="100vh">
         <SidebarContent
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}
         />
         <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
         >
            <DrawerContent>
               <SidebarContent onClose={onClose} />
            </DrawerContent>
         </Drawer>
         {/* mobilenav */}
         <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
         
         <Box ml={{ base: 0, md: 60 }}>
            {children}
         </Box>
      </Box>
   )
}

interface SidebarProps extends BoxProps {
   onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
   
   const t = useTypeSafeTranslation()
   const router = useRouter()
   
   const LinkItems: Array<LinkItemProps> = [
      { name: t('home'), icon: FiHome, href: '/' },
      { name: t('products'), icon: BiPackage, href: '/products' },
      { name: t('orders'), icon: BiBasket, href: '/orders' },
      { name: t('messages'), icon: BiMessageAlt, href: '/messages' },
      { name: t('stats'), icon: FiTrendingUp, href: '/stats' },
      { name: t('customization'), icon: BiPaintRoll, href: '/customization' },
      { name: t('settings'), icon: FiSettings, href: '/settings' },
   ]
   
   return (
      <Box
         top="0"
         bottom="0"
         boxShadow="md"
         // bg="#f9fafb"
         bg="#fff"
         borderRight="1px"
         borderTop="1px"
         borderRightColor={useColorModeValue('gray.200', 'gray.700')}
         borderTopColor={useColorModeValue('gray.200', 'gray.700')}
         w={{ base: 'full', md: 60 }}
         pos="absolute"
         h="calc(100vh-150px)"
         // borderTopRightRadius="lg"
         {...rest}>
         <Box
            pos="sticky"
            top="0"
            pt="6"
         >
            <Flex display={{ base: 'flex', md: 'none' }} h="2" alignItems="center" my="6" mx="8" justifyContent="space-between">
               <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            
            <Heading textAlign={{ base: "left", md: "center" }} px="6" mb="6" fontWeight="800" fontSize="1.3rem">Gérer la boutique</Heading>
            
            {LinkItems.map((link) => (
               <NavItem key={link.name} icon={link.icon} href={link.href} pathname={router.pathname}>
                  {link.name}
               </NavItem>
            ))}
         </Box>
      </Box>
   )
}

interface NavItemProps extends FlexProps {
   icon: IconType
   children: ReactText
   href: string
   pathname: string
}

const NavItem = ({ icon, children, href, pathname, ...rest }: NavItemProps) => {
   const { getStoreLinkTo } = useLinkHref()

   const isActive = (href === '/' && pathname.replace('/store/[sid]', '').length === 0) ? true : (href !== '/' && pathname.includes(href.replace('/', '')))
   return (
      <NextLink href={getStoreLinkTo(href)}>
         <Flex
            align="center"
            justify="space-between"
            py="2"
            px="4"
            mx="2"
            my="2"
            borderRadius="md"
            role="group"
            cursor="pointer"
            bgColor={isActive ? 'brand.500' : 'transparent'}
            color={isActive ? 'white': 'black'}
            _hover={{
               bg: isActive ? 'brand.500' : 'gray.100',
               // color: 'white',
            }}
            {...rest}
         >
            <Flex align="center">
               {icon && (
                  <Icon
                     mr="4"
                     fontSize="2xl"
                     _groupHover={{
                        // color: 'white',
                     }}
                     as={icon}
                  />
               )}
               {children}
            </Flex>
            {/*<Badge bgColor='brand.500' color="white">8</Badge>*/}
         </Flex>
      </NextLink>
   )
}


interface MobileProps extends FlexProps {
   onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
   return (
      <Flex
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 24 }}
         height="20"
         alignItems="center"
         bg={useColorModeValue('white', 'gray.900')}
         borderBottomWidth="1px"
         borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
         justifyContent="flex-start"
         {...rest}>
         <IconButton
            variant="outline"
            onClick={onOpen}
            aria-label="open menu"
            fontSize="2xl"
            icon={<BiCog />}
         />
         
         <Text fontSize="2xl" ml="3" fontWeight="bold" fontFamily="Petrona">
            Gérer la boutique
         </Text>
      </Flex>
   )
}
