import { NextPageWithLayout } from 'next'
import { Box, Container } from '@chakra-ui/react'
import { PageContent } from '@src/pages/success/index.content'

const Success: NextPageWithLayout = () => {
  return (
    <Box bgColor={'lightgreen'} h={'100vh'}>
      <Container py={10}>
        <PageContent />
      </Container>
    </Box>
  )
}

/**
 * ページ単位のglobal変数
 * 呼び出し方
 * [{ resolvedUrl }] = useExamplesSSRPageAtom()
 */
Success.getLayout = (page, props) => {
  return <>{page}</>
}

export default Success
