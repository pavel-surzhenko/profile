import { Container } from '@mui/material';
import { Contacts } from '../components';

export const ContactsPage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: 6 }}
        >
            <Contacts />
        </Container>
    );
};
