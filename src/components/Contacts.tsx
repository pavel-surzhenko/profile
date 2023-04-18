import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Typography, Paper, Button, Link, styled } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const getPaperStyles = () => ({
    px: 2,
    py: 4,
    flex: '1 1 25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'secondary.main',
    gap: '20px',
});

export const Contacts: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);

    return (
        <Box>
            <Typography
                variant='h3'
                color='text.secondary'
                textAlign='center'
                pb={6}
            >
                <TypeAnimation
                    sequence={[200, 'Contact me', () => setShowNextText(true)]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                />
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 3,
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Paper sx={getPaperStyles()}>
                    <Email sx={{ fontSize: '80px' }} />
                    <Typography variant='h5'>Email</Typography>
                    <Typography variant='h5'>
                        <Link
                            component={NavLink}
                            to='mailto:pavel.surzhenko@icloud.com'
                            color='secondary'
                            underline='hover'
                        >
                            pavel.surzhenko@icloud.com
                        </Link>
                    </Typography>
                </Paper>
                <Paper sx={getPaperStyles()}>
                    <GitHub sx={{ fontSize: '80px' }} />
                    <Typography variant='h5'>GitHub</Typography>
                    <Typography variant='h5'>
                        <Link
                            component={NavLink}
                            to='https://github.com/pavel-surzhenko'
                            target='_blank'
                            color='secondary'
                            underline='hover'
                        >
                            pavel-surzhenko
                        </Link>
                    </Typography>
                </Paper>
                <Paper sx={getPaperStyles()}>
                    <LinkedIn sx={{ fontSize: '80px' }} />
                    <Typography variant='h5'>LinkedIn</Typography>
                    <Typography variant='h5'>
                        <Link
                            component={NavLink}
                            to='https://www.linkedin.com/in/pavlo-surzhenko/'
                            target='_blank'
                            color='secondary'
                            underline='hover'
                        >
                            pavlo-surzhenko
                        </Link>
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};
