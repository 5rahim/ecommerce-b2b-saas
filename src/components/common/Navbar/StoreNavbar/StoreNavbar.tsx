import CartNavbarButton from '@/components/common/Navbar/StoreNavbar/CartNavbarButton'
import { useStoreQuery } from '@/graphql/hocs/withStore'
import useLinkHref from '@/hooks/useLinkHref'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Box, Button, chakra, CloseButton, Flex, Heading, HStack, IconButton, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome'
import { AiOutlineInbox } from '@react-icons/all-files/ai/AiOutlineInbox'
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu'
import { BsFillCameraVideoFill } from '@react-icons/all-files/bs/BsFillCameraVideoFill'
import React from 'react'
import UserDropdown from './UserDropdown'

function Logo() {
   return null
}

function StoreNavbar() {
   const bg = useColorModeValue("white", "gray.800")
   const mobileNav = useDisclosure()
   const { getOwnStoreHref, getOwnProfileHref, getOwnOrdersHref } = useLinkHref()
   const store = useStoreQuery()
   const t = useTypeSafeTranslation()
   
   return (
      <Box>
         <chakra.header
            bg={bg}
            borderColor="gray.200"
            borderBottomWidth={1}
            w="full"
            px={{ base: 2, sm: 4 }}
            py={4}
         >
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
               <HStack spacing={4} display="flex" alignItems="center">
                  <Box display={{ base: "inline-flex", md: "none" }}>
                     <IconButton
                        display={{ base: "flex", md: "none" }}
                        aria-label="Open menu"
                        fontSize="20px"
                        color={useColorModeValue("gray.800", "inherit")}
                        variant="ghost"
                        icon={<AiOutlineMenu />}
                        onClick={mobileNav.onOpen}
                     />
                     <VStack
                        pos="absolute"
                        top={0}
                        left={0}
                        right={0}
                        display={mobileNav.isOpen ? "flex" : "none"}
                        flexDirection="column"
                        p={2}
                        pb={4}
                        m={2}
                        bg={bg}
                        spacing={3}
                        rounded="sm"
                        shadow="sm"
                     >
                        <CloseButton
                           aria-label="Close menu"
                           justifySelf="self-start"
                           onClick={mobileNav.onClose}
                        />
                        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                           Dashboard
                        </Button>
                        <Button
                           w="full"
                           variant="solid"
                           colorScheme="brand"
                           leftIcon={<AiOutlineInbox />}
                        >
                           Inbox
                        </Button>
                        <Button
                           w="full"
                           variant="ghost"
                           leftIcon={<BsFillCameraVideoFill />}
                        >
                           {t('my_orders')}
                        </Button>
                     </VStack>
                  </Box>
                  <chakra.a
                     href="/"
                     title="Choc Home Page"
                     display="flex"
                     alignItems="center"
                  >
                     <Logo />
                  </chakra.a>
                  <Heading fontSize="xl">{store?.name}</Heading>
               </HStack>
               <HStack spacing={6} display="flex" alignItems="center">
                  
                  <CartNavbarButton />
                  
                  <UserDropdown />
               
               </HStack>
            </Flex>
         </chakra.header>
         
         
         {/*<Flex*/}
         {/*   alignItems="center"*/}
         {/*   justifyContent="space-between"*/}
         {/*   mx={2}*/}
         {/*   borderWidth={0}*/}
         {/*   overflowX="auto"*/}
         {/*>*/}
         {/*   <Tabs defaultIndex={1} borderBottomColor="transparent">*/}
         {/*      <TabList>*/}
         {/*         <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>*/}
         {/*            Basic*/}
         {/*         </Tab>*/}
         {/*         <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>*/}
         {/*            Integrations*/}
         {/*         </Tab>*/}
         {/*         <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>*/}
         {/*            Notifications*/}
         {/*         </Tab>*/}
         {/*         <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>*/}
         {/*            Usage*/}
         {/*         </Tab>*/}
         {/*         <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>*/}
         {/*            Billing*/}
         {/*         </Tab>{" "}*/}
         {/*         <Tab isDisabled py={4} m={0}>*/}
         {/*            Advanced*/}
         {/*         </Tab>*/}
         {/*      </TabList>*/}
         {/*   </Tabs>*/}
         {/*   <Spacer />*/}
         {/*   <HStack spacing={3} alignItems="center">*/}
         {/*      <InputGroup display={{ base: "none", lg: "block" }} ml="auto">*/}
         {/*         <InputLeftElement pointerEvents="none">*/}
         {/*            <AiOutlineSearch />*/}
         {/*         </InputLeftElement>*/}
         {/*         <Input type="tel" placeholder="Search..."  borderRadius="3xl" />*/}
         {/*      </InputGroup>*/}
         {/*   </HStack>*/}
         {/*</Flex>*/}
      </Box>
   )
}

export default StoreNavbar
