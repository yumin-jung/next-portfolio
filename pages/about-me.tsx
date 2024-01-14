import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from "next/legacy/image"
import profileImage from '../public/profile.jpeg'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3 pb-10">
        <Head>
          <title>About - Yumin</title>
          <meta name="description" content="portfolio by yumin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-16">
          <div className="mt-2 w-2/3 m-auto rounded-full overflow-hidden">
            <Image
              alt="about-me"
              src={profileImage}
              layout="responsive"
              width={500}
              height={500}
              quality={50}
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start py-10 sm:py-4 sm:px-10">
            <div className="text-xl sm:text-3xl mb-6 mt-10">
              Yumin Jung&nbsp;
              <Link className="text-base underline"
                href={"./resume-240114.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >resume</Link>
              &nbsp;
              <Link className="text-base underline"
                href={"./portfolio-240114.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
              >portfolio</Link>
            </div>
            <div className="text-base my-2 mb-4 px-8 text-center sm:px-0">
              🧑‍💻 UX Engineer based in Republic of Korea.
            </div>
            <div className="text-base my-2 mb-4 px-8 text-center sm:px-0">
              🔥 Strive for Clean and Structured Code that doesn&apos;t need comments.
            </div>
            <div className="text-base my-2 mb-8 px-8 text-center sm:px-0">
              😌 Interested in Frontend, UX, WebGL
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