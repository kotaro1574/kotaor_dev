import { atom, useAtomValue, useSetAtom } from 'jotai'

export type AuthUserState = {
  exp: number
  isLoggedIn: boolean
}

const authUserState = atom<AuthUserState>({
  exp: 0,
  isLoggedIn: false,
})

export const useSetAuthUserState = () => useSetAtom(authUserState)
export const useAuthUserStateValue = () => useAtomValue(authUserState)
