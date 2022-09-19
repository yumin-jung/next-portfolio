import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3 pb-10">
        <Head>
          <title>About</title>
          <meta name="description" content="portfolio by yumin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex">
          <div>About Me</div>
        </div>
      </div>
    </Layout>
  )
}

export default About