import { Container } from '@mui/material';
import { ContactForm, Contacts } from '../components';

export const ContactsPage: React.FC = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: 6 }}
        >
            <Contacts />
            <ContactForm />
        </Container>
    );
};
