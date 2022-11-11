import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { Box } from '@chakra-ui/react'

export const Header = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{JSON.stringify(error.message)}</div>

  if (user) {
    return (
      <header>
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </header>
    )
  }

  return (
    <Box bg={'green'} h={'20px'}>
      <Link href="/api/auth/login">Login</Link>
    </Box>
  )
}
