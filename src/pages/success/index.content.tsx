import { useAuth0 } from '@auth0/auth0-react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

export const PageContent = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  return (
    <Box>
      <Heading>Success</Heading>
      {isAuthenticated ? (
        <Box>
          <Text>{user?.name}</Text>
          <Button onClick={() => logout()} colorScheme={'red'}>
            ログアウトする
          </Button>
        </Box>
      ) : (
        <Box>
          <Text>ログイン</Text>
          <Button onClick={() => loginWithRedirect()} colorScheme={'blue'}>
            ログインする
          </Button>
        </Box>
      )}
    </Box>
  )
}
