import { ChakraTheme } from '@chakra-ui/react'

export const components: ChakraTheme['components'] = {
  Button: {
    baseStyle: {
      apply: 'textStyles.button',
    },
  },
  Text: {
    baseStyle: {
      apply: 'textStyles.body1',
    },
  },
}
