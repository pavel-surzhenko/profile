import { Container } from '@mui/material';
import { About } from '../components';

export const HomePage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto' }}
        >
            <About />
        </Container>
    );
};
