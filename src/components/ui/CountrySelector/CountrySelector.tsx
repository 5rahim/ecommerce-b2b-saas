import useCountryHelpers from '@/hooks/useCountryHelpers'
import useCurrentCountry from '@/hooks/useCurrentCountry'
import { useAppDispatch } from '@/store/index'
import { CountryActions } from '@/store/slices/countrySlice'
import { Button, Icon, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BiChevronDown } from '@react-icons/all-files/bi/BiChevronDown'
import React from 'react'

interface CountrySelectorProps {

}

const CountrySelector: React.FC<CountrySelectorProps> = (props) => {
   const { children, ...rest } = props
   const currentCountry = useCurrentCountry()
   const { getCountryFlag, getCountryName, getCountryList } = useCountryHelpers()
   const dispatch = useAppDispatch()
   
   function handleChangeCountry(code: string) {
      dispatch(CountryActions.setCountry(code))
   }
   
   return (
      <>
         <Menu>
            <MenuButton
               as={Button}
               rightIcon={<Icon ml="-4" as={BiChevronDown} />}
               fontSize="xl"
               px="2"
               mr="2"
            >
               <Image
                  boxSize='1.6rem'
                  borderRadius='full'
                  src={getCountryFlag(currentCountry)}
                  alt='Fluffybuns the destroyer'
                  mr='12px'
               />
            </MenuButton>
            <MenuList>
               {getCountryList().map(function(key, index) {
                  return (<MenuItem
                     minH='48px'
                     onClick={() => handleChangeCountry(key)}
                     key={key}
                  >
                     <Image
                        boxSize='1.6rem'
                        borderRadius='full'
                        src={getCountryFlag(key)}
                        alt='Fluffybuns the destroyer'
                        mr='12px'
                     />
                     <span>{getCountryName(key)}</span>
                  </MenuItem>)
               })}
            </MenuList>
         </Menu>
      </>
   )
   
}

export default CountrySelector
