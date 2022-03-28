import api from './$api'
import aspida from '@aspida/fetch'

export const client = api(
  aspida(fetch, {
    baseURL: 'https://petstore.swagger.io/v2',
  }),
)
