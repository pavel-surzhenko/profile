import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import { Facebook, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

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
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: '10px',
            }}
        >
            <Typography
                variant='body1'
                color='text'
            >
                Designed and Developed by Pavlo Surzhenko
            </Typography>
            <Typography
                variant='body1'
                color='text'
                textAlign='center'
            >
                {'Copyright © '}
                <Link
                    color='inherit'
                    href='https://github.com/pavel-surzhenko'
                ></Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Box>
                <Button
                    component={NavLink}
                    to='https://github.com/pavel-surzhenko'
                    target='_blank'
                >
                    <GitHub />
                </Button>
                <Button
                    component={NavLink}
                    to='https://www.linkedin.com/in/pavlo-surzhenko/'
                    target='_blank'
                >
                    <LinkedIn />
                </Button>
                <Button
                    component={NavLink}
                    to='https://www.facebook.com/profile.php?id=100002116431506'
                    target='_blank'
                >
                    <Facebook />
                </Button>
                <Button
                    component={NavLink}
                    to='https://t.me/pavlo_surzhenko'
                    target='_blank'
                >
                    <Telegram />
                </Button>
            </Box>
        </Box>
    );
};
