import { Head } from 'components/layouts'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'style/theme'
import 'focus-visible/dist/focus-visible'
import 'ress'
import { staticPath } from 'pages/$path'
import { firebaseInit } from 'lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head title="My App" description="My App description" ogImage={staticPath.og_jpg} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

function init() {
  firebaseInit()
}

init()
export default App
