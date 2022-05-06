import useCountryHelpers from '@/hooks/useCountryHelpers'
import { FormControl, FormLabel, Icon, InputGroup, InputRightElement } from '@chakra-ui/react'
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete/dist'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight'

function CountrySelect() {
   
   const { getCountryName, getCountryList } = useCountryHelpers()
   
   const countries = [
      "ci",
      "ng",
   ]
   
   return (
      <FormControl w="100%">
         <FormLabel>What country is your business based?</FormLabel>
         <AutoComplete openOnFocus>
            {({ isOpen }) => (
               <>
                  <InputGroup>
                     <AutoCompleteInput variant="filled" placeholder="Search..." />
                     <InputRightElement
                        children={
                           <Icon as={isOpen ? FiChevronRight : FiChevronDown} />
                        }
                     />
                  </InputGroup>
                  <AutoCompleteList>
                     {getCountryList().map((country, cid) => (
                        <AutoCompleteItem
                           key={`option-${cid}`}
                           value={country}
                           textTransform="capitalize"
                        >
                           {getCountryName(country)}
                        </AutoCompleteItem>
                     ))}
                  </AutoCompleteList>
               </>
            )}
         </AutoComplete>
      </FormControl>
   )
}

export default CountrySelect
