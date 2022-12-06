import Document, {  Html, Head, Main, NextScript , DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

    render() {
        return (
      <Html lang='pt-BR'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



// Menu creation
// Version mobile
// Version Desktop
// Install styled-components in nexthjs with chakra UI
// babel-plugin-styled-components configuration
// @types/styled-components configuration
// webpack svg in nexts.config.js configuration
// organization of shared folder and components

// global style setting
// install baseUrl absolut Imports and Module path aliases

