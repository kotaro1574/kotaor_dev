import type {
  InferGetServerSidePropsType,
  NextPage,
  NextPageWithLayout,
} from 'next'
import { InferGetStaticPropsType } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'

declare module 'next' {
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, pageProps: P) => ReactElement
  }
  /**
   * @see https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-with-typescript
   */
  type NextPageWithLayoutAndStaticProps<P = {}, IP = P> = NextPageWithLayout<
    InferGetStaticPropsType<P>,
    IP
  >
  /**
   * @see https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
   */
  type NextPageWithLayoutAndServerSideProps<
    P = {},
    IP = P
  > = NextPageWithLayout<InferGetServerSidePropsType<P>, IP>
}

declare module 'next/app' {
  type AppPropsWithLayout<P = {}> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}
