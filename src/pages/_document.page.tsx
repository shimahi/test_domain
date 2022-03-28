import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default function AppDocument() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  }
}
