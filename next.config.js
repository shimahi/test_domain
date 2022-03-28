/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = (phase, { defaultConfig }) => {
  return {
    webpack: (config, { webpack }) => {
      config.resolve.alias['@'] = path.join(__dirname, 'src')
      return config
    },
    reactStrictMode: true,
    /**
     *  pages下にルーティング以外のファイルを配置するためのもの
     * */
    pageExtensions: ['page.tsx', 'page.jsx'],
    /**
     * Next/Imageコンポーネントで使用するドメインを設定する
     */
    images: {
      domains: [],
    },
  }
}

module.exports = nextConfig
