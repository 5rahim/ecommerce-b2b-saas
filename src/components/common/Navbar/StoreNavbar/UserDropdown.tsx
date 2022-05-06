import { SignedIn, SignedOut } from '@/components/common/Auth'
import RouteLink from '@/components/common/Links/RouteLink'
import { useUserQuery } from '@/graphql/hocs/withUser'
import useLinkHref from '@/hooks/useLinkHref'
import { useNameFormatter } from '@/hooks/useNameFormatter'
import { useTypeSafeTranslation } from '@/hooks/useTypeSafeTranslation'
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import React from 'react'

interface UserDropdownProps {

}

const UserDropdown: React.FC<UserDropdownProps> = (props) => {
   
   const { children, ...rest } = props
   const t = useTypeSafeTranslation()
   const { getOwnStoreHref, getOwnProfileHref, getOwnOrdersHref, getLoginHref } = useLinkHref()
   const { formatFullName } = useNameFormatter()
   const user = useUserQuery()
   
   return (
      <>
         <SignedIn>
            <Menu>
               <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: 'none' }}
               >
                  <HStack>
                     <Avatar
                        size={'sm'}
                        src={user?.profile?.picture}
                     />
                     <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                     >
                        <Text fontSize="sm">{formatFullName(user)}</Text>
                     </VStack>
                     <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                     </Box>
                  </HStack>
               </MenuButton>
               <MenuList>
                  <RouteLink to={getOwnOrdersHref()}>
                     <MenuItem>{t('my_orders')}</MenuItem>
                  </RouteLink>
                  <RouteLink to={getOwnStoreHref()}>
                     <MenuItem>{t('my_store')}</MenuItem>
                  </RouteLink>
                  <RouteLink to={getOwnProfileHref()}>
                     <MenuItem>{t('my_profile')}</MenuItem>
                  </RouteLink>
                  
                  <MenuDivider />
                  <RouteLink to="/api/auth/logout">
                     <MenuItem>
                        {t('signout')}
                     </MenuItem>
                  </RouteLink>
               </MenuList>
            </Menu>
         
         </SignedIn>
         
         <SignedOut>
            <RouteLink to={getLoginHref()}>
               <Button variant="link">{t('signin')}</Button>
            </RouteLink>
         </SignedOut>
      </>
   )
   
}

export default UserDropdown
