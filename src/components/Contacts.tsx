import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Typography, Paper, Button, Link, styled } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const getPaperStyles = (hover: boolean) => ({
    px: 2,
    py: 4,
    flex: '0 0 33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: hover ? 'primary.main' : 'secondary.main',
    gap: '20px',
    transition: 'all 0.5s',
    '.MuiTypography-root': { transition: 'all 0.5s' },
});

export const Contacts: React.FC<ContactProps> = ({ onComplete }) => {
    const [showNextText, setShowNextText] = useState(false);
    const [hoverEmail, setHoverEmail] = useState(false);
    const [hoverGit, setHoverGit] = useState(false);
    const [hoverLinkedin, setHoverLinkedin] = useState(false);

    return (
        <Box>
            <Typography
                variant='h3'
                color='text.secondary'
                textAlign='center'
                pb={6}
            >
                <TypeAnimation
                    sequence={[
                        200,
                        'Contact me',
                        () => {
                            setShowNextText(true);
                            onComplete();
                        },
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                />
            </Typography>
            {showNextText && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3,
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Paper sx={getPaperStyles(hoverEmail)}>
                        <Email sx={{ fontSize: '80px' }} />
                        <Typography variant='h5'>Email</Typography>
                        <Typography variant='h5'>
                            <Link
                                component={NavLink}
                                to='mailto:pavel.surzhenko@icloud.com'
                                color='secondary'
                                underline='hover'
                                onMouseEnter={() => setHoverEmail(true)}
                                onMouseLeave={() => setHoverEmail(false)}
                            >
                                pavel.surzhenko@icloud.com
                            </Link>
                        </Typography>
                    </Paper>
                    <Paper sx={getPaperStyles(hoverGit)}>
                        <GitHub sx={{ fontSize: '80px' }} />
                        <Typography variant='h5'>GitHub</Typography>
                        <Typography variant='h5'>
                            <Link
                                component={NavLink}
                                to='https://github.com/pavel-surzhenko'
                                target='_blank'
                                color='secondary'
                                underline='hover'
                                onMouseEnter={() => setHoverGit(true)}
                                onMouseLeave={() => setHoverGit(false)}
                            >
                                pavel-surzhenko
                            </Link>
                        </Typography>
                    </Paper>
                    <Paper sx={getPaperStyles(hoverLinkedin)}>
                        <LinkedIn sx={{ fontSize: '80px' }} />
                        <Typography variant='h5'>LinkedIn</Typography>
                        <Typography variant='h5'>
                            <Link
                                component={NavLink}
                                to='https://www.linkedin.com/in/pavlo-surzhenko/'
                                target='_blank'
                                color='secondary'
                                underline='hover'
                                onMouseEnter={() => setHoverLinkedin(true)}
                                onMouseLeave={() => setHoverLinkedin(false)}
                            >
                                pavlo-surzhenko
                            </Link>
                        </Typography>
                    </Paper>
                </Box>
            )}
        </Box>
    );
};
interface ContactProps {
    onComplete: () => void;
}
