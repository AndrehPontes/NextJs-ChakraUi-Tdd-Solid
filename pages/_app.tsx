import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from 'shared/components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>   
             <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default App