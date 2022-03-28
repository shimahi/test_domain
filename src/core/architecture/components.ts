import { FC } from 'react'
import { State, Actions, Props } from './viewModel'

/**
 * @typeparam S state object
 * @typeparam A action object
 * @typeparam P props object
 */
export type Template<S = State, A extends Actions = {}, P = Props> = FC<P & { state: S; actions: A }>
