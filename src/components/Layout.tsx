// src/components/Layout.tsx
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <header>Header content here</header>
        <main>{children}</main>
        <footer>Footer content here</footer>
    </div>
);

export default Layout;
