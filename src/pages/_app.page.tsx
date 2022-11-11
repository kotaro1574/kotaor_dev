import type { AppPropsWithLayout } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Header } from '@src/components/Header'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <ChakraProvider>
        <Header />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
