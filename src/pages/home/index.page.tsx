import { GetServerSideProps, NextPageWithLayout } from 'next'
import { Container } from '@chakra-ui/react'
import { PageContent } from '@src/pages/home/index.content'
import { getAccessToken } from '@auth0/nextjs-auth0'

const Home: NextPageWithLayout = () => {
  return (
    <Container py={10}>
      <PageContent />
    </Container>
  )
}

/**
 * ページ単位のglobal変数
 * 呼び出し方
 * [{ resolvedUrl }] = useExamplesSSRPageAtom()
 */
Home.getLayout = (page, props) => {
  return <>{page}</>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context
  const accessToken = await getAccessToken(req, res)
  console.log(accessToken)
  return {
    props: {},
  }
}

export default Home
