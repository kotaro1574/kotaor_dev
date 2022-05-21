import { Atom } from 'jotai'

/**
 * @see https://zenn.dev/tell_y/articles/861bad9c505936#typescript
 */
export const createInitialValues = () => {
  const initialValues: (readonly [Atom<unknown>, unknown])[] = []
  const get = () => initialValues
  const set = <Value>(anAtom: Atom<Value>, value: Value) => {
    initialValues.push([anAtom, value])
  }
  return { get, set }
}
