import { ComponentProps } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { Box, Image as ChakraImage } from '@chakra-ui/react'

/**
 * @description
 * Next/ImageをChakra-UIでスタイルできるようにしたコンポーネント
 * SSG / SSR時の最適化のため、width/height属性が必須となる。
 * これらが不明の画像を表示する場合はChakra-UiのImageコンポーネントを利用すること
 */

/**
 * @todo
 * width, heightが配列/オブジェクト型のときの画像最適化
 */

type Prop = ComponentProps<typeof Box> & Omit<ImageProps, 'w' | 'width' | 'height' | 'h'>

export const Image = (props: Prop) => {
  const { src, alt, width, height, w, h, quality, placeholder, sx, ...rest } = props

  const _w = width || w
  const _h = height || h

  const imageWidth = getImageSize(_w as number)
  const imageHeight = getImageSize(_h as number)

  return (
    <Box
      {...rest}
      w={_w}
      h={_h}
      sx={{
        sx,
        width: _w,
        height: _h,
        img: {
          width: '100%!important',
          height: '100%!important',
        },
        '& > span': {
          width: 'inherit!important',
          height: 'inherit!important',
        },
      }}
    >
      {_w &&
      _h &&
      (typeof _w === 'number' || typeof _w === 'string') &&
      (typeof _h === 'number' || typeof _h === 'string') ? (
        <NextImage
          src={src}
          alt={alt}
          width={imageWidth ?? 768}
          height={imageHeight ?? 768}
          quality={quality}
          placeholder={placeholder}
        />
      ) : (
        <ChakraImage src={src as string} alt={alt} placeholder={placeholder} />
      )}
    </Box>
  )
}

/**
 * width / heightがspaceValueにある場合はpxに変換してImageに渡す
 * number型または"px"の単位がついてる場合は変換せずImageに渡す
 */
const getImageSize = (size: string | number | undefined) => {
  if (!size) {
    return null
  }
  if (size in spaceValue) {
    // @ts-ignore
    return spaceValue[size]
  }

  if ((typeof size === 'number' && size >= 0) || (typeof size === 'string' && size.match(/px$/))) {
    return size
  }

  return null
}

const spaceValue = {
  0: 0,
  px: 1,
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
}
