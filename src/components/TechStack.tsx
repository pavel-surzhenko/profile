import {
    Box,
    Typography,
    Grid,
    CircularProgress,
} from '@mui/material';
import Image from 'mui-image';
import data from '../data/data.json';
import { TypeAnimation } from 'react-type-animation';
import image from '/image/skills.svg';
import { useState } from 'react';

export const TechStack: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);

    const skillsJSX: JSX.Element[] = data.icons.map((skill) => (
        <Grid
            key={skill.name}
            item
            xs={3}
            sm={3}
            sx={{
                '& img': {
                    maxWidth: { xs: '60px', sm: '100px' },
                    maxHeight: { xs: '60px', sm: '100px' },
                    '&:hover': {
                        transform: 'scale(1.2)',
                    },
                },
            }}
        >
            {showNextText && (
                <>
                    <Image
                        src={skill.icon}
                        fit='contain'
                        duration={1000}
                        shift='top'
                        showLoading={<CircularProgress color='error' />}
                    />
                    <Typography
                        textAlign='center'
                        color='text.secondary'
                        variant='subtitle1'
                        pb={2}
                        mt={-1}
                    >
                        {skill.name}
                    </Typography>
                </>
            )}
        </Grid>
    ));

    return (
        <Box>
            <Typography
                variant='h3'
                color='text.secondary'
                textAlign='center'
            >
                <TypeAnimation
                    sequence={[
                        200,
                        'My technical skills',
                        () => setShowNextText(true),
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                />
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '50px',
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Box sx={{ flexBasis: '50%', order: { xs: '2', sm: '1' } }}>
                    {showNextText && (
                        <Image
                            style={{ maxHeight: '700px' }}
                            src={image}
                            fit='contain'
                            duration={1000}
                            shift='left'
                            shiftDuration={1500}
                        />
                    )}
                </Box>
                <Box sx={{ flexBasis: '50%' }}>
                    <Grid
                        container
                        spacing={2}
                    >
                        {skillsJSX}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};
