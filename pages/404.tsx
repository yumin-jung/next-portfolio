import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const PageNotFound: NextPage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-3">
                <Head>
                    <title>Portfolio - 404</title>
                    <meta name="description" content="portfolio by yumin" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 my-8 sm:mx-16">
                    <img className="block mx-auto"
                        width="600px"
                        src="https://cdn-images-1.medium.com/proxy/1*8rgW0Qvy2bSGSBMlORMhQA.png" />
                    <div className="flex flex-col items-center justify-center sm:items-start py-10 sm:py-4 sm:px-10">
                        <div className="px-2 text-sm sm:text-lg">PAGE NOT FOUND</div>
                        <div className="text-6xl sm:text-9xl my-2 text-gray-300">404</div>
                        <div className="text-2xl sm:text-7xl mb-16">Out of nothing, something.</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PageNotFound