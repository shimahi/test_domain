import { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

/**
 * @description Layout
 * 共通レイアウト
 */

type LayoutProps = {
  boxProps?: BoxProps
}

export const Layout: FC<LayoutProps> = ({ children, boxProps }) => {
  return (
    <Box as="main" {...boxProps}>
      {children}
    </Box>
  )
}
