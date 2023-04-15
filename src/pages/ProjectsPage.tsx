import { Container } from '@mui/material';
import { ProjectList } from '../components';

export const ProjectsPage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: 6 }}
        >
            <ProjectList />
        </Container>
    );
};
