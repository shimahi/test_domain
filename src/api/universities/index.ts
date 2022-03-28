import api from './$api'
import aspida from '@aspida/fetch'

const fetchConfig = {
  baseURL: 'http://universities.hipolabs.com',
}

export const client = api(aspida(fetch, fetchConfig))
