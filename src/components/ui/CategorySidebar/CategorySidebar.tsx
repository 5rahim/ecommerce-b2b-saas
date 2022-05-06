import {
   Box, BoxProps, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Heading, IconButton, Link, Text, useColorModeValue, useDisclosure,
} from '@chakra-ui/react'
import { FiMenu } from '@react-icons/all-files/fi/FiMenu'
import React, { ReactText } from 'react'

interface CategoryItemProps {
   name: string
}

const LinkItems: Array<CategoryItemProps> = [
   { name: 'Accueil' },
   { name: 'Produits' },
   { name: 'Commandes' },
   { name: 'Messages' },
   { name: 'Statistiques' },
   { name: 'Customisation' },
   { name: 'Paramètres' },
]

interface CategorySidebar {
   items?: Array<CategoryItemProps>
}


const CategorySidebar: React.FC<CategorySidebar> = (props) => {
   const { children, items = [] } = props
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <Box display={{ base: 'block', md: 'flex' }}>
         {
            items.length > 0 && (
               <SidebarContent
                  items={items}
                  onClose={() => onClose}
                  display={{ base: 'none', md: 'block' }}
               />
            )
         }
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
               <SidebarContent onClose={onClose} items={items} />
            </DrawerContent>
         </Drawer>
         {/* mobilenav */}
         <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
         
         <Box w="100%" p={4} ml={items.length > 0 ? { base: 0, md: "180px", xl: "230px" } : undefined}>
            {children}
         </Box>
      </Box>
   )
}

interface SidebarProps extends BoxProps {
   onClose: () => void;
   items: CategoryItemProps[]
}

const SidebarContent = ({ onClose, items, ...rest }: SidebarProps) => {
   return (
      <Box
         bg="transparent"
         w={{ base: 'full', md: "180px", xl: "230px" }}
         pos="absolute"
         h="100vh"
         borderTopRightRadius="lg"
         {...rest}>
         <Box
            pos="sticky"
            top="0"
            pt="6"
         >
            <Flex
               h="2"
               py="8"
               alignItems="center"
               mx="8"
               justifyContent="space-between"
               position="relative"
               display={{ base: 'flex', md: 'none' }}
            >
               <CloseButton display={{ base: 'block', md: 'none' }} onClick={onClose} />
            </Flex>
            
            <Heading color="black" px="8" mb="3" fontSize="xl">Catégories</Heading>
            
            {items.map((link) => (
               <NavItem key={link.name}>
                  {link.name}
               </NavItem>
            ))}
         </Box>
      </Box>
   )
}

interface NavItemProps extends FlexProps {
   children: ReactText;
}

const NavItem = ({ children, ...rest }: NavItemProps) => {
   return (
      <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
         <Flex
            align="center"
            py="2"
            px="4"
            mx="4"
            my="2"
            borderRadius="md"
            role="group"
            cursor="pointer"
            fontFamily="Petrona"
            fontWeight="600"
            fontSize="lg"
            color="gray.500"
            borderBottom='1px'
            borderColor="gray.200"
            _hover={{
               // bg: 'brand.500',
               color: 'black',
               fontWeight: "bold",
            }}
            {...rest}>
            {children}
         </Flex>
      </Link>
   )
}


interface MobileProps extends FlexProps {
   onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
   return (
      <Flex
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 24 }}
         height="20"
         alignItems="center"
         bg="white"
         borderBottomWidth="1px"
         borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
         justifyContent="flex-start"
         {...rest}>
         <IconButton
            variant="outline"
            onClick={onOpen}
            aria-label="open menu"
            fontSize="xl"
            icon={<FiMenu />}
         />
         
         <Text fontSize="2xl" ml="3" fontWeight="bold" fontFamily="Petrona">
            Catégories
         </Text>
      </Flex>
   )
}

export default CategorySidebar
