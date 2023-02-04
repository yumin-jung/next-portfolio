import Link from 'next/link'
import dynamic from 'next/dynamic';
const AnimationHome = dynamic(() => import('./animation-home'));

const Hero = () => {
    return <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Yumin Jung
            </h1>
            <div className="flex justify-center">
                <Link href="/project" className="btn-project">
                    Project
                </Link>
            </div>
        </div>
        <div className="max-w-[500px]">
            <AnimationHome />
        </div>
    </>;
}

export default Hero