import { Outlet } from 'react-router-dom';

import { Header, Footer, Particle } from './components';

export const App = () => {
    return (
        <>
            <Header />
            <Particle />
            <Outlet />
            <Footer />
        </>
    );
};
