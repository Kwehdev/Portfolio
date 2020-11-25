import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'cursive',
    subHeading: '"Montserrat", sans-serif',
    body: '"Roboto", sans-serif',
  },
  colors: {
    atom_dark: {
      50: '#eef2fa',
      100: '#d4d7de',
      200: '#b8bcc5',
      300: '#9ca2ad',
      400: '#808796',
      500: '#676e7d',
      600: '#505562',
      700: '#383d46',
      800: '#21252b',
      900: '#080c13',
    },
  },
})

export default theme
