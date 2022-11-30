import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from "next/legacy/image";
import profileImage from '../public/profile.jpeg'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3 pb-10">
        <Head>
          <title>Yumin - About</title>
          <meta name="description" content="portfolio by yumin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-16">
          <div className="mt-2 w-2/3 m-auto rounded-full overflow-hidden">
            <Image
              src={profileImage}
              layout="responsive"
              width={500}
              height={500}
              quality={5}
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start py-10 sm:py-4 sm:px-10">
            <div className="text-xl sm:text-3xl mb-6 mt-10">
              Yumin Jung
            </div>
            <div className="text-base my-2 mb-4 px-8 text-center sm:px-0">
              🧑‍💻 Frontend Engineer based in Republic of Korea.
            </div>
            <div className="text-base my-2 mb-4 px-8 text-center sm:px-0">
              🔥 Passionate developer who loves Coding and New Technology.
            </div>
            <div className="text-base my-2 mb-8 px-8 text-center sm:px-0">
              😌 Interested in Frontend, UI / UX Design, and Website Optimization.
            </div>
            <div className="text-xl sm:text-6xl mb-16">
              Less is more.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About