import React from 'react';
import Header from './header';
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <h1>Layout</h1>
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout