import RouteLink from '@/components/common/Links/RouteLink'
import { Box, chakra, Container, Image, Link, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { Card } from '@saas-ui/react'
import React, { ReactNode } from 'react'

const Logo = (props: any) => {
   return (
      <RouteLink to="/">
         <Image src="/assets/images/logo.svg" maxHeight="20px" />
      </RouteLink>
   )
}

const SocialButton = ({
                         children,
                         label,
                         href,
                      }: {
   children: ReactNode;
   label: string;
   href: string;
}) => {
   return (
      <chakra.button
         bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
         rounded={'full'}
         w={8}
         h={8}
         cursor={'pointer'}
         as={'a'}
         href={href}
         display={'inline-flex'}
         alignItems={'center'}
         justifyContent={'center'}
         transition={'background 0.3s ease'}
         _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   )
}

export default function SmallCentered() {
   return (
      <Card
         bg={"white"}
         color={useColorModeValue('gray.700', 'gray.200')}
      >
         <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}
         >
            <Logo />
            <Stack direction={'row'} spacing={6}>
               <Link href={'#'}>Marketplace</Link>
               <Link href={'#'}>About</Link>
               <Link href={'#'}>Features</Link>
               <Link href={'#'}>Contact</Link>
            </Stack>
         </Container>
         
         <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
         >
            <Container
               as={Stack}
               maxW={'6xl'}
               py={4}
               direction={{ base: 'column', md: 'row' }}
               spacing={4}
               justify={{ base: 'center', md: 'space-between' }}
               align={{ base: 'center', md: 'center' }}
            >
               <Text>© 2022 Mosu. All rights reserved</Text>
               <Stack direction={'row'} spacing={6}>
                  <SocialButton label={'Twitter'} href={'#'}>
                     <FaTwitter />
                  </SocialButton>
                  <SocialButton label={'YouTube'} href={'#'}>
                     <FaYoutube />
                  </SocialButton>
                  <SocialButton label={'Instagram'} href={'#'}>
                     <FaInstagram />
                  </SocialButton>
               </Stack>
            </Container>
         </Box>
      </Card>
   )
}
