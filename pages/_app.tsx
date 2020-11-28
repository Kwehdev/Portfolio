import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ActiveTabProvider } from '../src/client/context/ActiveTabContext'
import theme from '../src/client/utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ActiveTabProvider>
        <Component {...pageProps} />
      </ActiveTabProvider>
    </ChakraProvider>
  )
}

export default MyApp
