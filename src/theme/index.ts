import { createTheme, Theme } from '@mui/material';

export const colorTheme: ColorTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#ffefef', '#ff7d88', '#ff525d', '#f0323d', '#e50914'],
};

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

interface ColorTheme {
    light: [string, string, string, string, string];
    dark: [string, string, string, string, string];
}
