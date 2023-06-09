import { Container } from '@mui/material';
import { TechStack } from '../components';

export const SkillsPage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: { xs: 4, md: 6 } }}
        >
            <TechStack />
        </Container>
    );
};
