import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'

export const LoadingScreen = ({ text }: any) => {
   
   return (
      
      <SimpleGrid
         backgroundColor="gray.200"
         position="fixed"
         left="0"
         width="100%"
         height="100%"
         top="0"
         right="0"
         alignItems="center"
         alignContent="center"
         justifyContent="center"
         justifyItems="center"
         zIndex="9999"
      >
         
         <Spinner size="xl" />
         {text && <Text>{text}</Text>}
      
      </SimpleGrid>
   
   )
   
}

export default LoadingScreen
