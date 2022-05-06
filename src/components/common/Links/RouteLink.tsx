import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export interface RouteLinkProps
   extends Omit<NextLinkProps, 'as' | 'href'>,
      Omit<ChakraLinkProps, 'as' | 'href'> {
   to: string
   as?: string
}

const RouteLink: React.FC<RouteLinkProps> = (
   {
      to,
      as = to,
      children,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      passHref,
      ...props
   }) => {
   return (
      <NextLink
         passHref
         href={to}
         as={as}
         replace={replace}
         scroll={scroll}
         shallow={shallow}
         prefetch={prefetch}
         locale={locale}
      >
         <ChakraLink {...props}>{children}</ChakraLink>
      </NextLink>
   )
}

export default RouteLink
