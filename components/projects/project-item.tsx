import Image from "next/image";

const ProjectItem = ({ data }: any) => {
    const title = data.properties.Project.title[0]?.plain_text
    const github = data.properties.GitHub.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>GitHub Repository</a>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end}
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag: any) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-gray-100 dark:bg-slate-600 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default ProjectItem