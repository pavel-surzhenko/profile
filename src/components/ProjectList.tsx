import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Project } from './Project';
import data from '../data/data.json';
import image from '../assets/image/project.svg';

export const ProjectList: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);
    const [showMore, setShowMore] = useState(3);

    const projectsJSX: JSX.Element[] = data.projects
        .slice(0, showMore)
        .map((project) => (
            <Project
                key={project.name}
                {...project}
            />
        ));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
                variant='h3'
                textAlign='center'
                color='text.secondary'
                pb={6}
            >
                <TypeAnimation
                    sequence={[200, 'My projects', () => setShowNextText(true)]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                />
            </Typography>
            {showNextText && (
                <Grid
                    container
                    spacing={5}
                >
                    {projectsJSX}
                </Grid>
            )}
            {showNextText && (
                <Button
                    variant='outlined'
                    color='secondary'
                    sx={{ alignSelf: 'center', mt: 5 }}
                    onClick={() =>
                        showMore >= data.projects.length
                            ? setShowMore(3)
                            : setShowMore(showMore + 3)
                    }
                    size='large'
                >
                    {showMore >= data.projects.length
                        ? 'Show Less'
                        : 'Show More'}
                </Button>
            )}
            {showNextText && (
                <Box
                    component='img'
                    src={image}
                    sx={{
                        alignSelf: 'end',
                        objectFit: 'contain',
                        maxHeight: { sm: '600px', xs: '400px' },
                        maxWidth: '100%',
                    }}
                ></Box>
            )}
        </Box>
    );
};
