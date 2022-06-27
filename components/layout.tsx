import React from 'react';
import Header from './header';
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-primary">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout