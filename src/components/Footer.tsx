import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer: React.FC = () => {
    return (
        <Box
            component='footer'
            sx={{
                flex: '0 0 auto',
                width: '100%',
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                backgroundImage:
                    'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                zIndex: 2,
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
