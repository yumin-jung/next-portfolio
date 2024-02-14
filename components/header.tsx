import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button';

const Header = () => {
    return <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center">
                <Link
                    href="/"
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-2 mr-2 text-xl">
                        Portfolio
                    </span>

                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="ml-2 mr-2 hover:text-gray-900">

                        Home

                    </Link>
                    <Link href="/about-me" className="ml-2 mr-2 hover:text-gray-900">

                        About

                    </Link>
                    <Link href="/project" className="ml-2 mr-2 hover:text-gray-900">

                        Project

                    </Link>
                    <a href="https://velog.io/@yumin-jung"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 mr-2 hover:text-gray-900">
                        Blog
                    </a>
                </nav>
                <DarkModeToggleButton />
            </div>
        </header>
    </>;
}

export default Header