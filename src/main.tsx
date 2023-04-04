import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

const theme: Theme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: 'rgba(229, 9, 20, 1)',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
