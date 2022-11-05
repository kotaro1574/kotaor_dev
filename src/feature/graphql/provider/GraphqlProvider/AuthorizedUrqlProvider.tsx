import React, { ReactNode } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {
  createClient,
  Provider,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Exchange,
  Operation,
} from 'urql'
import { pipe, map, mergeMap, fromPromise, fromValue } from 'wonka'
import { GRAPHQL_URL } from '@src/constant/env'

type Props = {
  children: ReactNode
}

const AuthorizedUrqlProvider = ({ children }: Props) => {
  const { getAccessTokenSilently } = useAuth0()

  const fetchOptionsExchange =
    (fn: any): Exchange =>
    ({ forward }) =>
    (ops$) => {
      return pipe(
        ops$,
        mergeMap((operation: Operation) => {
          const result = fn(operation.context.fetchOptions)
          return pipe(
            (typeof result.then === 'function'
              ? fromPromise(result)
              : fromValue(result)) as any,
            map((fetchOptions: RequestInit | (() => RequestInit)) => ({
              ...operation,
              context: { ...operation.context, fetchOptions },
            }))
          )
        }),
        forward
      )
    }

  // want to debug? -> https://github.com/FormidableLabs/urql-devtools-exchange#usage
  const client = createClient({
    url: GRAPHQL_URL,
    exchanges: [
      dedupExchange,
      cacheExchange,
      fetchOptionsExchange(async (fetchOptions: any) => {
        const token = await getAccessTokenSilently()

        return Promise.resolve({
          ...fetchOptions,
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        })
      }),
      fetchExchange,
    ],
    requestPolicy: 'network-only',
  })

  return <Provider value={client}>{children}</Provider>
}

export default AuthorizedUrqlProvider
