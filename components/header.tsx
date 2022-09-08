import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button';

const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-2 mr-2 text-xl">
                                Portfolio
                            </span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="ml-2 mr-2 hover:text-gray-900">
                                Home
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="ml-2 mr-2 hover:text-gray-900">
                                Projects
                            </a>
                        </Link>
                        <a href="https://github.com/yumin-jung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 mr-2 hover:text-gray-900">
                            GitHub
                        </a>
                        <a href="https://medium.com/@yumin-jung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 mr-2 hover:text-gray-900">
                            Blog
                        </a>
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}

export default Header