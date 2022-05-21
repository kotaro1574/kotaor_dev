import type { GetServerSideProps } from 'next'
import { Box } from '@chakra-ui/react'
import { atom, Provider, useAtom } from 'jotai'
import { NextPageWithLayoutAndServerSideProps } from 'next'
import { createInitialValues } from '@src/lib/jotai/createInitialValues'

type ServerSideProps = {
  resolvedUrl: string
  title: string
}

const Home: NextPageWithLayoutAndServerSideProps<ServerSideProps> = () => {
  return <Box>chakra</Box>
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const data = {
    resolvedUrl: context.resolvedUrl,
    title: 'this is server side render',
  }
  try {
    return {
      props: {
        ...data,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const homePageScope = Symbol()
const homePageAtom = atom<ServerSideProps>({
  resolvedUrl: '',
  title: '',
})

/**
 * ページ単位のglobal変数
 * 呼び出し方
 * [{ resolvedUrl }] = useExamplesSSRPageAtom()
 */
export const useHomePageAtom = () => useAtom(homePageAtom, homePageScope)
Home.getLayout = (page, props) => {
  const initialValues = createInitialValues()
  initialValues.set(homePageAtom, props)
  return (
    <Provider initialValues={initialValues.get()} scope={homePageScope}>
      <>{page}</>
    </Provider>
  )
}

export default Home
