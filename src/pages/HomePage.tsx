import { Container } from '@mui/material';
import { About, GitHubStat } from '../components';

export const HomePage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', mb: '50px' }}
        >
            <About />
            <GitHubStat />
        </Container>
    );
};
