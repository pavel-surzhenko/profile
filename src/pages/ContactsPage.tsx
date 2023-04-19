import { Container } from '@mui/material';
import { ContactForm, Contacts } from '../components';
import { useState } from 'react';

export const ContactsPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const setVisible = () => setIsVisible(!isVisible);

    return (
        <Container
            maxWidth='xl'
            sx={{ flex: '1 0 auto', my: 6 }}
        >
            <Contacts onComplete={setVisible} />
            {isVisible && <ContactForm />}
        </Container>
    );
};
