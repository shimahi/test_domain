import { extendTheme, ChakraTheme, theme as defaultTheme } from '@chakra-ui/react'
import { textStyles } from './textStyles'
import { colors } from './colors'
import { components } from './components'

const themeExtention: ChakraTheme = {
  ...defaultTheme,
  colors,
  components,
  textStyles,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {},
  },
}

export const theme = extendTheme(themeExtention)
