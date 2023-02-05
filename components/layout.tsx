import React from 'react';
import Header from './header';
import Footer from './footer'
import DarkModeToggleButton from './dark-mode-toggle-button';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-primary select-none font-sans antialiased">
            {/* <Header /> */}
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout