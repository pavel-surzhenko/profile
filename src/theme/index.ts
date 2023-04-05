import { createTheme, Theme } from '@mui/material';

export const theme: Theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    height: '100%'
                },
                body: {
                    height: '100%',
                    '& div#root': {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        text: {
            primary: 'rgba(229, 9, 20, 1)',
            secondary: 'rgba(255, 255, 255, 1)'
        },
    },
});