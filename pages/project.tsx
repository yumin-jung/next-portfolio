import Head from 'next/head'
import Layout from '../components/layout'
import { TOKEN, DATABASE_ID } from '../config'
import ProjectItem from "../components/projects/project-item";
import type { List } from 'notion-api-types/endpoints/global';
import type { Page } from 'notion-api-types/responses';
import Link from 'next/link'

interface Projects {
  projects: List<Page>;
}

const Projects = ({ projects }: Projects) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 pb-10">
        <Head>
          <title>Yumin - Project</title>
          <meta name="description" content="portfolio by yumin" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/" className="items-start text-left hover:text-gray-900">
          Home
        </Link>
        <div className="grid grid-cols-1 align-middle lg:grid-cols-4 md:grid-cols-2 p-10 m-4 gap-8 transition-opacity">
          {projects.results.map((aProject: Page) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "WorkPeriod",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

  const projects = await res.json()

  return {
    props: { projects },
    revalidate: 60,
  }
}