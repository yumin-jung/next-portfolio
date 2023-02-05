import Image from "next/legacy/image";
import type { SelectOptions } from 'notion-api-types/responses/properties/global';
import type { Page } from 'notion-api-types/responses';

interface ProjectItem {
    // type 지정 필요
    data: Page | any;
}

const ProjectItem = ({ data }: ProjectItem) => {
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
                width="100"
                height="55"
                layout="responsive"
                objectFit="cover"
                quality={75}
                priority
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold mr-4">{title}</h1>
                <h3 className="mt-4 text-base">{description}</h3>
                <a className="text-base md:text-sm"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub Link
                </a>
                <p className="my-1 text-xs md:text-xs">
                    {start} ~ {end}
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag: SelectOptions) => (
                        < h1 className="px-2 py-1 mr-2 rounded-md bg-gray-100 dark:bg-slate-600 w-30 text-xs" key={aTag.id} > {aTag.name}</h1>
                    ))}
                </div>

            </div>

        </div >
    );
}

export default ProjectItem