import Head from '@/components/common/Head'
import { Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import NextLink from '../Links/NextLink'

interface CenteredLayoutProps {
}

const CenteredLayout: React.FC<CenteredLayoutProps> = (props) => {
   
   const { children, ...rest } = props
   
   return (
      <>
         <Head />
        <Container maxW="container.md">
           <Flex
              p="5"
              justify="center"
              borderBottom="1px solid"
              borderColor="gray.200"
              mb="5"
           >
              <NextLink href="/">
                 <Image cursor="pointer" src="/assets/images/logo.svg" maxHeight="20px" />
              </NextLink>
           </Flex>
           {children}
        </Container>
      </>
   )
   
}

export default CenteredLayout
