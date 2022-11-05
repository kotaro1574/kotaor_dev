import type { AppPropsWithLayout } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, REDIRECT_URI } from '@src/constant/env'
import AuthorizedUrqlProvider from '@src/feature/graphql/provider/GraphqlProvider/AuthorizedUrqlProvider'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={REDIRECT_URI}
    >
      <AuthorizedUrqlProvider>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </ChakraProvider>
      </AuthorizedUrqlProvider>
    </Auth0Provider>
  )
}

export default App
