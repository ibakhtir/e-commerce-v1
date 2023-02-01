import "@/styles/globals.css"

import Head from "next/head"

import { Layout } from "@/components/common"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce-v1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
