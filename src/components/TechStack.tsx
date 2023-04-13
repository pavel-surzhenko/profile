import { Box, Card, CardMedia, Typography, Grid } from '@mui/material';
import data from '../data/data.json';
import { TypeAnimation } from 'react-type-animation';
import image from '../theme/image/skills.svg';

export const TechStack: React.FC = () => {
    const skillsJSX: JSX.Element[] = data.icons.map((skill) => (
        <Grid
            item
            xs={4}
            sm={3}
        >
            <Card
                key={skill.name}
                sx={{
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    maxWidth: '100px',
                }}
            >
                <CardMedia
                    component='img'
                    image={skill.icon}
                    title={skill.name}
                />
                <Typography
                    textAlign='center'
                    color='text.secondary'
                    variant='subtitle1'
                    pt='5px'
                >
                    {skill.name}
                </Typography>
            </Card>
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
                    sequence={[300, 'My technical skills']}
                    speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
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
                <Box sx={{ flexBasis: '50%' }}>
                    <Card sx={{ backgroundImage: 'none', boxShadow: 'none' }}>
                        <CardMedia
                            sx={{ maxHeight: '700px', objectFit: 'contain' }}
                            component='img'
                            image={image}
                        />
                    </Card>
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
