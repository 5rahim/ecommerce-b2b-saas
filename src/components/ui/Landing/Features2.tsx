import { Box, chakra, Flex, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export default function Features2() {
   return (
      <Flex
         bg={useColorModeValue("#F9FAFB", "gray.600")}
         p={20}
         w="full"
         justifyContent="center"
         alignItems="center"
      >
         <Box
            shadow="xl"
            bg={useColorModeValue("white", "gray.800")}
            px={8}
            py={20}
            mx="auto"
         >
            <SimpleGrid
               alignItems="start"
               columns={{ base: 1, md: 2 }}
               mb={24}
               spacingY={{ base: 10, md: 32 }}
               spacingX={{ base: 10, md: 24 }}
            >
               <Box>
                  <Heading
                     mb={4}
                     fontSize={{ base: "2xl", md: "4xl" }}
                     fontWeight="400"
                     letterSpacing="tight"
                     textAlign={{ base: "center", md: "left" }}
                     color={useColorModeValue("gray.900", "gray.400")}
                     lineHeight={{ md: "shorter" }}
                  >
                     Manage your store and products
                  </Heading>
                  <chakra.p
                     mb={5}
                     textAlign={{ base: "center", sm: "left" }}
                     color={useColorModeValue("gray.600", "gray.400")}
                     fontSize={{ md: "lg" }}
                  >
                     Manage your store and products efficiently with the
                     clear overview in Dashboard. Features like the smart search option
                     allow you to quickly find any data you’re looking for. Clients will be able to start orders online.
                  </chakra.p>
               </Box>
               <Box
                  w="full"
                  h="full"
                  py={48}
                  bg={useColorModeValue("gray.200", "gray.700")}
               ></Box>
            </SimpleGrid>
            <SimpleGrid
               alignItems="center"
               columns={{ base: 1, md: 2 }}
               flexDirection="column-reverse"
               mb={24}
               spacingY={{ base: 10, md: 32 }}
               spacingX={{ base: 10, md: 24 }}
            >
               <Box order={{ base: "none", md: 2 }}>
                  <Heading
                     mb={4}
                     fontSize={{ base: "2xl", md: "4xl" }}
                     fontWeight="400"
                     letterSpacing="tight"
                     textAlign={{ base: "center", md: "left" }}
                     color={useColorModeValue("gray.900", "gray.400")}
                     lineHeight={{ md: "shorter" }}
                  >
                     Communicate securely with clients
                  </Heading>
                  <chakra.p
                     mb={5}
                     textAlign={{ base: "center", sm: "left" }}
                     color={useColorModeValue("gray.600", "gray.400")}
                     fontSize={{ md: "lg" }}
                  >
                     Using a secure Whatsapp conversation or our built-in chat, your clients will be able to contact you without sharing personal numbers.
                  </chakra.p>
               </Box>
               <Box
                  w="full"
                  h="full"
                  py={48}
                  bg={useColorModeValue("gray.200", "gray.700")}
               ></Box>
            </SimpleGrid>
            <SimpleGrid
               alignItems="start"
               columns={{ base: 1, md: 2 }}
               mb={24}
               spacingY={{ base: 10, md: 32 }}
               spacingX={{ base: 10, md: 24 }}
            >
               <Box>
                  <Heading
                     mb={4}
                     fontSize={{ base: "2xl", md: "4xl" }}
                     fontWeight="400"
                     letterSpacing="tight"
                     textAlign={{ base: "center", md: "left" }}
                     color={useColorModeValue("gray.900", "gray.400")}
                     lineHeight={{ md: "shorter" }}
                  >
                     Share your store easily
                  </Heading>
                  <chakra.p
                     mb={5}
                     textAlign={{ base: "center", sm: "left" }}
                     color={useColorModeValue("gray.600", "gray.400")}
                     fontSize={{ md: "lg" }}
                  >
                     Handle your subscriptions and transactions efficiently with the
                     clear overview in Dashboard. Features like the smart search option
                     allow you to quickly find any data you’re looking for.
                  </chakra.p>
               </Box>
               <Box
                  w="full"
                  h="full"
                  py={48}
                  bg={useColorModeValue("gray.200", "gray.700")}
               ></Box>
            </SimpleGrid>
            <SimpleGrid
               alignItems="center"
               columns={{ base: 1, md: 2 }}
               flexDirection="column-reverse"
               mb={24}
               spacingY={{ base: 10, md: 32 }}
               spacingX={{ base: 10, md: 24 }}
            >
               <Box order={{ base: "none", md: 2 }}>
                  <Heading
                     mb={4}
                     fontSize={{ base: "2xl", md: "4xl" }}
                     fontWeight="400"
                     letterSpacing="tight"
                     textAlign={{ base: "center", md: "left" }}
                     color={useColorModeValue("gray.900", "gray.400")}
                     lineHeight={{ md: "shorter" }}
                  >
                     Multiple built-in features
                  </Heading>
                  <chakra.p
                     mb={5}
                     textAlign={{ base: "center", sm: "left" }}
                     color={useColorModeValue("gray.600", "gray.400")}
                     fontSize={{ md: "lg" }}
                  >
                     With our platform, you will be able to add delivery fees, update delivery statuses, notify clients via SMS and much more from the dashboard. You will also have access to automatically generated invoices for your orders.
                  </chakra.p>
               </Box>
               <Box
                  w="full"
                  h="full"
                  py={48}
                  bg={useColorModeValue("gray.200", "gray.700")}
               ></Box>
            </SimpleGrid>
         </Box>
      </Flex>
   )
}
