export const makeViewModel = <P, S = State, A = Actions>(callback: ModelFunc<P, S, A>) => {
  return (props?: P) => {
    // eslint-disable-next-line
    const { state, actions } = callback(props ?? (null as any))

    return {
      state,
      actions,
    }
  }
}

type ModelFunc<P, S, A> = (props: P) => {
  state: S
  actions: A
}

export type Props = Record<string, unknown>

export type State = Record<string, unknown>

export type Actions = {
  [key in `on${Uppercase<string>}`]: (...props: any) => any
}
