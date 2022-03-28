import { FC } from 'react'
import NextHead from 'next/head'
import { staticPath } from 'pages/$path'

/**
 * @description
 *
 * メタ要素を出力する
 */

type HeadProps = {
  /**
   * title要素 29文字程度
   */
  title?: string
  /**
   * description要素 120文字程度
   */
  description?: string
  /**
   * ogp画像 縦1:横1.91の画像URL
   */
  ogImage?: string
}

export const Head: FC<HeadProps> = ({ title, description, ogImage, children }) => {
  return (
    <NextHead>
      {title && (
        <>
          <title>{title}</title>
          <meta content={title} property="og:title" />
        </>
      )}
      {description && (
        <>
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content={description} property="twitter:decription" />
        </>
      )}
      {ogImage && (
        <>
          <meta content={ogImage} property="og:image" />
          <meta content={ogImage} property="twitter:image" />
        </>
      )}
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="website" property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="icon" sizes="16x16" href={staticPath.icon_png} />
      <link rel="apple-touch-icon" href={staticPath.icon_png} />
      <link rel="manifest" href={staticPath.manifest_json} />
      <link rel="icon" type="image/png" sizes="196x196" href={staticPath.icons.favicon_196_png} />
      <link rel="apple-touch-icon" href={staticPath.icons.apple_icon_180_png} />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2048_2732_jpg}
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2732_2048_jpg}
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1668_2388_jpg}
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2388_1668_jpg}
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1536_2048_jpg}
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2048_1536_jpg}
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1668_2224_jpg}
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2224_1668_jpg}
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1620_2160_jpg}
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2160_1620_jpg}
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1284_2778_jpg}
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2778_1284_jpg}
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1170_2532_jpg}
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2532_1170_jpg}
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1125_2436_jpg}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2436_1125_jpg}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1242_2688_jpg}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2688_1242_jpg}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_828_1792_jpg}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1792_828_jpg}
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1242_2208_jpg}
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_2208_1242_jpg}
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_750_1334_jpg}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1334_750_jpg}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_640_1136_jpg}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href={staticPath.icons.apple_splash_1136_640_jpg}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      {children}
    </NextHead>
  )
}
