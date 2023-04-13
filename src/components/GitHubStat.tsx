import { Box, Typography } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';
import { colorTheme } from '../theme';

export const GitHubStat: React.FC = () => {
    return (
        <Box>
            <Typography
                variant='h3'
                textAlign='center'
                color='text.secondary'
                gutterBottom
            >
                Day I Code
            </Typography>
            <GitHubCalendar
                username='pavel-surzhenko'
                blockSize={15}
                blockMargin={5}
                colorScheme='dark'
                fontSize={16}
                theme={colorTheme}
                style={{ margin: 'auto' }}
            />
        </Box>
    );
};
