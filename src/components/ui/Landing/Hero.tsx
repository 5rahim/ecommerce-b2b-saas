import NextLink from '@/components/common/Links/NextLink'
import { Box, Button, chakra, Heading, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export default function CallToActionWithIllustration() {
   const {t} = useTranslation()
   const bg = useColorModeValue("white", "gray.800")
   return (
      <>
         <Box pos="relative" overflow="hidden" bg={bg}>
            <Box maxW="7xl" mx="auto">
               <Box
                  pos="relative"
                  pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                  maxW={{ lg: "2xl" }}
                  w={{ lg: "full" }}
                  zIndex={1}
                  bg={bg}
                  border="solid 1px transparent"
               >
                  <Icon
                     display={{ base: "none", lg: "block" }}
                     position="absolute"
                     right={0}
                     top={0}
                     bottom={0}
                     h="full"
                     w={48}
                     color={bg}
                     transform="translateX(50%)"
                     fill="currentColor"
                     viewBox="0 0 100 100"
                     preserveAspectRatio="none"
                     aria-hidden="true"
                  >
                     <polygon points="50,0 100,0 50,100 0,100" />
                  </Icon>
                  <Box
                     mx="auto"
                     maxW={{ base: "7xl" }}
                     px={{ base: 4, sm: 6, lg: 6 }}
                     mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 20 }}
                  >
                     <Box
                        w="full"
                        textAlign={{ sm: "center", lg: "left" }}
                        justifyContent="center"
                        alignItems="center"
                     >
                        <Heading
                           fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                           letterSpacing="tight"
                           fontWeight="extrabold"
                           color={useColorModeValue("gray.900", "white")}
                        >
                           <chakra.span display={{ base: "block", xl: "inline" }}>
                              {t('hero:title1')}{" "}
                           </chakra.span>
                           {/*<chakra.span*/}
                           {/*   display={{ base: "block", xl: "inline" }}*/}
                           {/*   color='brand.500'*/}
                           {/*>*/}
                           {/*   online storefront{" "}*/}
                           {/*</chakra.span>*/}
                           <Text
                              display={{ base: "block", lg: "inline" }}
                              w="full"
                              bgClip="text"
                              bgGradient="linear(to-r, blue.400,brand.500)"
                              fontWeight="extrabold"
                           >
                              {t('hero:title2')}{" "}
                           </Text>
                           <chakra.span display={{ base: "block", xl: "inline" }}>
                              {t('hero:title3')}
                           </chakra.span>
                        </Heading>
                        <chakra.p
                           mt={{ base: 3, sm: 5, md: 5 }}
                           fontSize={{ sm: "lg", md: "xl" }}
                           maxW={{ sm: "xl" }}
                           mx={{ sm: "auto", lg: 0 }}
                           color="gray.500"
                        >
                           {t('hero:description')}
                        </chakra.p>
                        <Box
                           mt={{ base: 5, sm: 8 }}
                           display={{ sm: "flex" }}
                           justifyContent={{ sm: "center", lg: "start" }}
                        >
                           <NextLink href="/get-started">
                              <Button
                                 size="lg"
                                 w="full"
                                 display="flex"
                                 alignItems="center"
                                 justifyContent="center"
                                 border="solid 1px transparent"
                                 rounded="3xl"
                                 colorScheme="brand"
                              >
                                 {t('hero:button.action')}
                              </Button>
                           </NextLink>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
            <Box
               position={{ lg: "absolute" }}
               top={{ lg: 0 }}
               bottom={{ lg: 0 }}
               right={{ lg: 0 }}
               w={{ lg: "50%" }}
               border="solid 1px transparent"
            >
               <Image
                  h={[56, 72, 96, "full"]}
                  w="full"
                  fit="cover"
                  src="https://images.unsplash.com/photo-1604072390964-b26e6a6fac29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt=""
                  loading="lazy"
               />
            </Box>
         
         </Box>
         {/*<Box*/}
         {/*   w={{ base: "full", md: 10 / 12 }}*/}
         {/*   mx="auto"*/}
         {/*   mt={20}*/}
         {/*   textAlign="center"*/}
         {/*>*/}
         {/*   <Image*/}
         {/*      w="60%"*/}
         {/*      rounded="lg"*/}
         {/*      shadow="2xl"*/}
         {/*      src="https://kutty.netlify.app/hero.jpg"*/}
         {/*      alt="Hellonext feedback boards software screenshot"*/}
         {/*   />*/}
         {/*</Box>*/}
      </>
   )
}
