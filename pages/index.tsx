import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Yumin</title>
        <meta name="description" content="portfolio by yumin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col justify-center items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}

export default Home
