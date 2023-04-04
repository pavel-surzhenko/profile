import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer: React.FC = () => {
    return (
        <Box
            component='footer'
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundImage:
                    'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
            }}
        >
            <Typography
                variant='body1'
                color='text'
                textAlign='center'
            >
                {'Copyright © '}
                <Link
                    color='inherit'
                    href='https://github.com/pavel-surzhenko'
                >
                    Pavlo Surzhenko
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
};
