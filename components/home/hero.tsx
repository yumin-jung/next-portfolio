import Animation from './animation'
import Link from 'next/link'

const Hero = () => {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hi, I&apos;m Yumin Jung &#58; &#41;
                </h1>
                <p className="mb-8 leading-relaxed">
                    지나고 아름다운 가슴속에 듯합니다. 자랑처럼 이름자를 프랑시스 당신은 가슴속에 것은 다 거외다.
                    어머님, 벌레는 추억과 이름자를 애기 지나가는 노루, 별이 이름과, 있습니다.
                    이름을 가을로 나의 벌레는 불러 새워 봄이 무덤 이름자를 듯합니다.
                    소학교 멀듯이, 겨울이 다 아침이 있습니다. 하늘에는 쓸쓸함과 이제 버리었습니다.
                    옥 나의 둘 차 밤을 하나에 위에 그리워 계십니다.
                    별들을 이국 잠, 거외다. 그러나 이름을 가난한 듯합니다.
                    된 한 나의 말 지나가는 봅니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            Project
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}

export default Hero