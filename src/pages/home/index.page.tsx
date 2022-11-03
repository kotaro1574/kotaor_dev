import { NextPageWithLayout } from 'next'
import { Container } from '@chakra-ui/react'
import { PageContent } from '@src/pages/home/index.content'

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

export default Home
