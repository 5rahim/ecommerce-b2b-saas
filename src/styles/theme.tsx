import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    blue: {
      50: '#DFE8F6',
      100: '#9EBAE5',
      200: '#6E97D8',
      300: '#4E80D0',
      400: '#3E74CC',
      500: '#336AC1',
      600: '#2F61B1',
      700: '#2B58A1',
      800: '#274F91',
      900: '#224781',
    },
  },
  shadows: {
    outline: '0 !important',
  },
  fonts,
  breakpoints,
})

export default theme
