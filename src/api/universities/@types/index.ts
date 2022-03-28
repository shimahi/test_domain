/**
 * APIで取得するデータの型をここに定義する
 */

export type Domain = {
  web_pages: string[]
  country: string
  'state-province': null | unknown
  name: string
  domains: string[]
  alpha_two_code: string
}
