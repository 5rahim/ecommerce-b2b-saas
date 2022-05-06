import { chakra, Link, LinkProps } from "@chakra-ui/react"
import React from 'react'

export interface OutgoingLinkProps extends LinkProps {
   externalIcon?: React.FC
}

export const OutgoingLink: React.FC<OutgoingLinkProps> = (
   {
      children,
      isExternal = true,
      externalIcon = null,
      ...props
   }) => {
   const Icon = externalIcon && chakra(externalIcon)
   return (
      <Link isExternal={isExternal} {...props}>
         {children}
         {Icon && (
            <Icon
               display="inline-block"
               mx="0.2em"
               fontSize="0.8em"
               aria-label="(external link)"
            />
         )}
      </Link>
   )
}
