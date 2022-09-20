import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import profileImage from '../public/profile.jpeg'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3 pb-10">
        <Head>
          <title>About</title>
          <meta name="description" content="portfolio by yumin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-16">
          <div className="w-2/3 m-auto rounded-full overflow-hidden">
            <Image
              src={profileImage}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start py-10 sm:py-4 sm:px-10">
            <div className="text-sm sm:text-lg">Yumin Jung</div>
            <div className="text-sm my-2 text-gray-800">Interested in FE / UX / Optimization. </div>
            <div className="text-2xl sm:text-7xl mb-16">Less is more.</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About