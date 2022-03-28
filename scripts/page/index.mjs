#!/usr/bin/env zx
import 'zx/globals'
import pluralize from 'pluralize'

/**
 * 新しいページとテンプレートを作成する
 * yarn page xxxx
 */

let title = argv['_'][1]
const [_, __, ...restArgs] = argv['_']

const pageOptions = restArgs.filter((item) => item !== 'detail')
const pageOption = pageOptions.length
  ? ['ssr', 'isr', 'csr'].includes(pageOptions[0])
    ? pageOptions[0]
    : 'ssg'
  : 'ssg'

if (!title) {
  console.log('Please input page title again')
  process.exit(0)
}

/**
 * detailオプションがあれば pages/xxxx/[id].tsxと、components/XxxxDetailTemplateを作成
 * そうでなければ pages/xxxx/index.tsxと、components/XxxxTemplateを作成する
 */

const isDetail = restArgs.includes('detail')
const pathName = isDetail ? `./src/pages/${title}/[id]` : `./src/pages/${title}`
const templateName = isDetail ? `${pluralize(capitalize(title), 1)}Detail` : capitalize(title)

console.log(`Page title is ${isDetail ? `${pluralize(title, 1)}Detail` : title}`)
console.log(`Page option is ${pageOption.toUpperCase()}`)

/**
 * フォルダの作成
 */
await $`mkdir -p ${pathName} \
  && mkdir ${pathName}/template`

/**
 * スケルトンファイルのコピー
 */
await $`cp ./scripts/page/page_${pageOption} ${pathName}/index.page.tsx \
  && cp ./scripts/page/${pageOption === 'csr' ? 'viewModel_csr' : 'viewModel'} ${pathName}/viewModel.ts \
  && cp ./scripts/page/template ${pathName}/template/index.tsx`

/**
 * コピーしたファイル内の変数名修正
 */
await $`sed -i -e 's/Index/${templateName}/g' ${pathName}/index.page.tsx \
  && sed -i -e 's/Index/${templateName}/g' ${pathName}/template/index.tsx \
  && rm -f ${pathName}/index.page.tsx-e \
  && rm -f ${pathName}/template/index.tsx-e`

/**
 * pathpidaを実行
 */
await $`yarn path`

/**
 * 文字列の先頭を大文字に変換
 * @param {string} str 対象の文字列
 * @return {string} 変換された文字列を返す
 */
function capitalize(str) {
  if (typeof str !== 'string' || !str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
