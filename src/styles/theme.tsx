import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { baseTheme } from '@saas-ui/react'
import CustomSteps from './Steps.theme'


// const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
   sm: '40em',
   md: '52em',
   lg: '64em',
   xl: '80em',
})

const theme = extendTheme({
   fonts: {
      heading: 'Petrona, Lato',
      body: 'Segoe UI',
   },
   components: {
      Steps: CustomSteps,
      Button: {
         baseStyle: props => {
            return {
               // borderRadius: 0,
            }
         },
      },
      Input: {
         baseStyle: props => {
            return {}
         },
         variants: {
            outline: {
               field: {
                  // borderRadius: 0,
                  _focus: {
                     borderColor: 'brand.500',
                     boxShadow: '0 0 0 1px #6152df',
                  },
               },
            },
         },
      },
      Textarea: {
         baseStyle: props => {
            return {}
         },
         variants: {
            outline: {
               // borderRadius: 0,
               _focus: {
                  borderColor: 'brand.500',
                  boxShadow: '0 0 0 1px #6152df',
               },
            },
         },
      },
      Menu: {
         baseStyle: props => {
            return {
               list: {
                  p: 2,
                  // borderRadius: 0,
                  '& > a': {
                     textDecoration: 'none',
                     _hover: {
                        textDecoration: 'none',
                     },
                  },
               },
               item: {
                  borderRadius: 'md',
                  textDecoration: 'none',
               },
            }
         },
      },
      EmptyState: {
         baseStyle: props => {
            return {
               container: {
                  position: 'relative',
                  p: 2,
                  textAlign: 'center',
               },
               icon: {
                  p: 6,
                  boxSize: ['80px', '100px', '120px', '120px'],
                  borderRadius: '50%',
                  color: 'gray.600',
                  bgColor: 'gray.50',
                  mb: '-5',
                  // fontSize: '2xl'
               },
               title: {
                  fontSize: '4xl',
               },
               actions: {
                  mt: 4,
               },
            }
         },
      },
      Banner: {
         baseStyle: props => {
            return {
               container: {
                  borderRadius: 'md',
               },
               title: {
                  fontFamily: 'Petrona',
                  fontSize: 'xl',
               },
            }
         },
      },
      Card: {
         baseStyle: props => {
            return {
               container: {
                  // borderRadius: 0,
                  // boxShadow: 0
               },
               header: {
                  py: '2',
                  fontFamily: 'Petrona',
               },
               title: {
                  fontSize: '2xl',
                  fontWeight: 'bold',
               },
            }
         },
      },
   },
   colors: {
      black: '#16161D',
      // blue: {
      //    50: '#baceed',
      //    100: '#91b1e2',
      //    200: '#7da2dd',
      //    300: '#6994d7',
      //    400: '#5585d2',
      //    500: '#336AC1',
      //    600: '#285499',
      //    700: '#234984',
      //    800: '#1e3e70',
      //    900: '#132848',
      // },
      light: {
         50: '#f7f4f0',
         100: '#f7f4f0',
         200: '#e5dccf',
         300: '#dccfbe',
         400: '#d4c3ad',
         500: '#c2ab8c',
         600: '#c2ab8c',
         700: '#c2ab8c',
         800: '#c2ab8c',
         900: '#c2ab8c',
      },
      gray: {
         50: '#fafafa',
         // 50: '#f5f7f8',
         100: '#F1F1F2',
         200: '#E7E7E8',
         300: '#D3D4D5',
         400: '#ABADAF',
         500: '#7D7F83',
         600: '#52555A',
         700: '#33373D',
         800: '#1D2025',
         900: '#171A1D',
      },
      purple: {
         500: '#7e52df',
      },
      yellow: {
         50: '#fef7eb',
         100: '#fae3bb',
         200: '#f9daa3',
         300: '#f7d08c',
         400: '#f5c674',
         500: '#F2B344',
         600: '#efa014',
         700: '#da910f',
         800: '#c2810e',
         900: '#93610a',
      },
      green: {
         50: '#85dfb8',
         100: '#5cd4a1',
         200: '#48cf95',
         300: '#35c989',
         400: '#30b47c',
         500: '#258c60',
         600: '#1a6444',
         700: '#154f37',
         800: '#103b29',
         900: '#05130d',
      },
      teal: {
         50: '#eafaf8',
         100: '#c0f0eb',
         200: '#acebe4',
         300: '#97e7dd',
         400: '#82e2d6',
         500: '#59d8c9',
         600: '#30cebb',
         700: '#2bb9a8',
         800: '#27a496',
         900: '#1d7b70',
      },
      blue: {
         50: '#ebf8ff',
         100: '#bee3f8',
         200: '#90cdf4',
         300: '#63b3ed',
         400: '#4299e1',
         500: '#3182ce',
         600: '#2b6cb0',
         700: '#2c5282',
         800: '#2a4365',
         900: '#1A365D',
      },
      brand: {
         50: '#f3f1ff',
         500: '#6152df',
      },
   },
   shadows: {
      outline: '0 !important',
   },
   // fonts,
   breakpoints,
}, baseTheme)

export default theme
