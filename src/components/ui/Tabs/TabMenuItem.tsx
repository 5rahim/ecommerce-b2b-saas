import { Flex, Icon, useMultiStyleConfig, useTab } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

interface TabMenuProps {
   icon?: any
}

const TabMenuItem: any = React.forwardRef((props: PropsWithChildren<TabMenuProps>, ref) => {
   // 1. Reuse the `useTab` hook
   const tabProps = useTab({ ...props, ref } as any)
   const isSelected = !!tabProps['aria-selected']
   
   // 2. Hook into the Tabs `size`, `variant`, props
   const styles = useMultiStyleConfig('Tabs', tabProps)
   
   const currStyles = {
      ...styles,
      tab: {
         ...styles.tab,
         outline: 0,
         fontSize: 'md',
         borderRadius: 'md',
         display: 'flex',
         gap: 3,
         align: 'center',
         color: 'gray.500',
         py: 2,
         my: 1,
         cursor: 'pointer',
         _selected: {
            color: 'brand.500',
            fontWeight: '600',
            bgColor: 'brand.50',
         },
         _hover: {
            bgColor: isSelected ? 'brand.50' : 'gray.100',
            color: isSelected ? 'brand.500' : 'black',
            // fontWeight: '600',
         }
      }
   }
   
   return (
      <Flex __css={currStyles.tab} {...tabProps}>
         <Icon as={props.icon} fontSize="xl" color={isSelected ? 'brand.500' : 'gray.500'} mt=".2rem" />
         <span>{tabProps.children}</span>
      </Flex>
   )
})

export default TabMenuItem
