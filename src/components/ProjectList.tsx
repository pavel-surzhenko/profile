import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Project } from './Project';
import data from '../data/data.json';

export const ProjectList: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);

    const projectsJSX: JSX.Element[] = data.projects.map((project) => (
        <Project
            key={project.name}
            {...project}
        />
    ));

    return (
        <Box>
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
        </Box>
    );
};
