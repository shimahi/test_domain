import { makeViewModel } from 'core/architecture'
import { PropsType } from './index.page'
import type { State, Action } from './index.template'
import useAspidaSWR from '@aspida/swr'
import { client } from 'api/petstore'

export const useViewModel = makeViewModel<PropsType, State, Action>((props) => {
  const { data, error, mutate } = useAspidaSWR(client.pet.findByStatus, {
    query: { status: ['sold'] },
    fallbackData: props,
  })

  const refetch = () => {
    mutate().then((res) => console.log(res))
  }

  if (error) {
    console.log('エラーだにょ')
  }

  return {
    state: {
      loading: !data,
      pets: data?.length ? data.filter((_, index) => index < 100) : [],
    },
    actions: {
      onRefetch: refetch,
    },
  }
})
