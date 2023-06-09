import { Box, Card, CardMedia, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import image from '/image/home.svg';
import { useState } from 'react';

export const About: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mb: { xs: 4, sm: 12 },
                flexDirection: { xs: 'column', sm: 'row' },
            }}
        >
            <Box sx={{ flexBasis: '60%', color: 'text.secondary' }}>
                <Typography
                    variant='h2'
                    fontWeight='500'
                >
                    Hi!
                </Typography>
                <Typography variant='h3'>
                    <TypeAnimation
                        sequence={[
                            1000,
                            'I`am Pablo',
                            500,
                            'I`am Pavlo',
                            () => setShowNextText(true),
                        ]}
                    />
                </Typography>
                <Typography
                    variant='h5'
                    sx={{
                        lineHeight: '150%',
                        maxWidth: { xs: '90%', sm: '75%' },
                        opacity: showNextText ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                >
                    Junior Front-end Developer. I provide services for creating
                    high-quality adaptive sites and landing pages for businesses
                    and individuals.
                </Typography>
                <Typography
                    variant='h5'
                    sx={{
                        lineHeight: '150%',
                        maxWidth: { xs: '90%', sm: '75%' },
                        opacity: showNextText ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out 0.7s',
                        mt: { xs: 4, md: 6 },
                    }}
                >
                    I fell in love with programming and I have at least learned
                    something, I think…
                </Typography>
            </Box>
            <Box sx={{ flexBasis: '40%' }}>
                <Card sx={{ backgroundImage: 'none', boxShadow: 'none' }}>
                    <CardMedia
                        component='img'
                        sx={{
                            maxHeight: '500px',
                        }}
                        image={image}
                    />
                </Card>
            </Box>
        </Box>
    );
};
