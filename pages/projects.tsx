import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const Projects: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="portfolio by yumin" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Projects</h1>
        </Layout>
    )
}

export default Projects