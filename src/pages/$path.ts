/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  icon_png: '/icon.png',
  icons: {
    apple_icon_180_png: '/icons/apple-icon-180.png',
    apple_splash_1125_2436_jpg: '/icons/apple-splash-1125-2436.jpg',
    apple_splash_1136_640_jpg: '/icons/apple-splash-1136-640.jpg',
    apple_splash_1170_2532_jpg: '/icons/apple-splash-1170-2532.jpg',
    apple_splash_1242_2208_jpg: '/icons/apple-splash-1242-2208.jpg',
    apple_splash_1242_2688_jpg: '/icons/apple-splash-1242-2688.jpg',
    apple_splash_1284_2778_jpg: '/icons/apple-splash-1284-2778.jpg',
    apple_splash_1334_750_jpg: '/icons/apple-splash-1334-750.jpg',
    apple_splash_1536_2048_jpg: '/icons/apple-splash-1536-2048.jpg',
    apple_splash_1620_2160_jpg: '/icons/apple-splash-1620-2160.jpg',
    apple_splash_1668_2224_jpg: '/icons/apple-splash-1668-2224.jpg',
    apple_splash_1668_2388_jpg: '/icons/apple-splash-1668-2388.jpg',
    apple_splash_1792_828_jpg: '/icons/apple-splash-1792-828.jpg',
    apple_splash_2048_1536_jpg: '/icons/apple-splash-2048-1536.jpg',
    apple_splash_2048_2732_jpg: '/icons/apple-splash-2048-2732.jpg',
    apple_splash_2160_1620_jpg: '/icons/apple-splash-2160-1620.jpg',
    apple_splash_2208_1242_jpg: '/icons/apple-splash-2208-1242.jpg',
    apple_splash_2224_1668_jpg: '/icons/apple-splash-2224-1668.jpg',
    apple_splash_2388_1668_jpg: '/icons/apple-splash-2388-1668.jpg',
    apple_splash_2436_1125_jpg: '/icons/apple-splash-2436-1125.jpg',
    apple_splash_2532_1170_jpg: '/icons/apple-splash-2532-1170.jpg',
    apple_splash_2688_1242_jpg: '/icons/apple-splash-2688-1242.jpg',
    apple_splash_2732_2048_jpg: '/icons/apple-splash-2732-2048.jpg',
    apple_splash_2778_1284_jpg: '/icons/apple-splash-2778-1284.jpg',
    apple_splash_640_1136_jpg: '/icons/apple-splash-640-1136.jpg',
    apple_splash_750_1334_jpg: '/icons/apple-splash-750-1334.jpg',
    apple_splash_828_1792_jpg: '/icons/apple-splash-828-1792.jpg',
    favicon_196_png: '/icons/favicon-196.png',
    manifest_icon_192_maskable_png: '/icons/manifest-icon-192.maskable.png',
    manifest_icon_512_maskable_png: '/icons/manifest-icon-512.maskable.png'
  },
  manifest_json: '/manifest.json',
  og_jpg: '/og.jpg'
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
