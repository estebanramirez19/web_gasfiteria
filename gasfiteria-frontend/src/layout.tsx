import React from 'react';

import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';

import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main>
                {/* el outlet renderiza el componente de la ruta anidada */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;