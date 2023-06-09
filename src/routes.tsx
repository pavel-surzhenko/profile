import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App';

import { ContactsPage, HomePage, ProjectsPage, ResumePage, SkillsPage } from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                path: '/skills',
                element: <SkillsPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
            },
            {
                path: '/contacts',
                element: <ContactsPage />,
            },
            {
                path: '/resume',
                element: <ResumePage />,
            },
            {
                path: '*',
                element: (
                    <Navigate
                        to='/'
                        replace
                    />
                ),
            },
        ],
    },
]);
