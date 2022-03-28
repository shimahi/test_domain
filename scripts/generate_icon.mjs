#!/usr/bin/env zx
import 'zx/globals'

/**
 * PWA用ファイルの生成
 * resources/icon.pngが必要
 */

/**
 * ファビコンとapple-iconとandroidのmanifest-iconは背景を透過して作成
 */
await $`npx pwa-asset-generator ./public/icon.png ./public/icons --opaque false --icon-only --favicon --path-override ./public/icons`

/**
 * PWA用のスプラッシュ画像は背景色をつけて作成
 * @note 背景色を変更する場合はbackgroudColorの値を変更してください。
 */
const backgroundColor = '#000'

await $`npx pwa-asset-generator ./public/icon.png ./public/icons --splash-only ./public/manifest.json --path-override ./public/icons --background ${backgroundColor}`
