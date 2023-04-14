import {
    Box,
    Typography,
    Grid,
    CircularProgress,
    useTheme,
} from '@mui/material';
import Image from 'mui-image';
import data from '../data/data.json';
import { TypeAnimation } from 'react-type-animation';
import image from '../theme/image/skills.svg';
import { useState } from 'react';

export const TechStack: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);
    const theme = useTheme();

    const skillsJSX: JSX.Element[] = data.icons.map((skill) => (
        <Grid
            key={skill.name}
            item
            xs={3}
            sm={3}
        >
            {showNextText && (
                <>
                    <Image
                        src={skill.icon}
                        fit='contain'
                        duration={1000}
                        shift='top'
                        sx={{
                            maxWidth: { xs: '75px', sm: '100px' },
                            maxHeight: { xs: '75px', sm: '100px' },
                            '&:hover': {
                                transform: 'scale(1.2)',
                            },
                        }}
                        showLoading={<CircularProgress color='error' />}
                    />
                    <Typography
                        textAlign='center'
                        color='text.secondary'
                        variant='subtitle1'
                        py='5px'
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
                    my: { xs: '25px', sm: '100px' },
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Box sx={{ flexBasis: '50%', order: { xs: '2', sm: '1' } }}>
                    {showNextText && (
                        <Image
                            sx={{ maxHeight: '700px' }}
                            src={image}
                            fit='contain'
                            duration={1000}
                            shift='left'
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
