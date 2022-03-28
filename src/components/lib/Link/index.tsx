import { Button as ChakraButton, Link as ChakraLink } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'

type CustomLinkProps = LinkProps & Omit<ComponentProps<typeof ChakraLink>, 'href'>

/**
 * @description Link
 * NextLinkと<a>の両方のpropsを受け取り、リンクとして振る舞うコンポーネント。
 *
 * @howto
 * <Link href={href}>hoge</Link>
 */
export const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  passHref = true,
  ...props
}: CustomLinkProps) => {
  const nextLinkProps = { href, as, replace, scroll, shallow, passHref, prefetch, locale }
  const isExternal = typeof href === 'string' && !!href.match(/^https?:/)
  const target = props.target ?? (isExternal ? '_blank' : '_self')
  const rel = props.rel ?? (isExternal ? 'noreferrer noopener' : '')

  return (
    <NextLink {...nextLinkProps}>
      <ChakraLink target={target} rel={rel} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

type CustomLinkButtonProps = LinkProps & Omit<ComponentProps<typeof ChakraButton>, 'href'>

/**
 *
 * @description LinkButton
 * NextLinkとして振る舞うchakra-uiのボタンコンポーネント
 */
export const LinkButton = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  passHref = true,
  ...props
}: CustomLinkButtonProps) => {
  const nextLinkProps = { href, as, replace, scroll, shallow, passHref, prefetch, locale }
  const isExternal = typeof href === 'string' && !!href.match(/^https?:/)
  const target = props.target ?? (isExternal ? '_blank' : '_self')
  const rel = props.rel ?? (isExternal ? 'noreferrer noopener' : '')

  return (
    <NextLink {...nextLinkProps}>
      <ChakraButton as="a" target={target} rel={rel} {...props}>
        {children}
      </ChakraButton>
    </NextLink>
  )
}
