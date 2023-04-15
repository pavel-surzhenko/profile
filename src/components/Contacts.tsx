import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const Contacts: React.FC = () => {
    const [showNextText, setShowNextText] = useState(false);
    return (
        <Box>
            <Typography
                variant='h3'
                color='text.secondary'
                textAlign='center'
            >
                <TypeAnimation
                    sequence={[200, 'Contact me', () => setShowNextText(true)]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                />
            </Typography>
        </Box>
    );
};
