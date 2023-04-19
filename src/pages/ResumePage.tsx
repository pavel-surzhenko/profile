import { Container } from '@mui/material';
import { Resume } from '../components';

export const ResumePage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: { xs: 4, md: 6 } }}
        >
            <Resume />
        </Container>
    );
};
