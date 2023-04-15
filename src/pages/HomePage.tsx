import { Container } from '@mui/material';
import { About, GitHubStat } from '../components';

export const HomePage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: 6 }}
        >
            <About />
            <GitHubStat />
        </Container>
    );
};
