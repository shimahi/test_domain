import { Domain } from '../@types'

export type Methods = {
  get: {
    query?: {
      name?: string
      country?: string
    }
    resBody: Domain[]
  }
}
