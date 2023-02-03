import "@/styles/globals.css"

import { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"

import store from "@/redux/store"
import { Layout } from "@/components/common"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce-v1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
