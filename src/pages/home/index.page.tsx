import { NextPageWithLayout } from 'next'
import { Box } from '@chakra-ui/react'

const Home: NextPageWithLayout = () => {
  return <Box>chakra</Box>
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
