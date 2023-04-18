import { Typography, Box, TextField, Stack, Button } from '@mui/material';
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, message);
    };
    return (
        <Box
            pt={4}
            color='text.secondary'
        >
            <Typography
                variant='h4'
                textAlign='center'
                pb={6}
            >
                Say Hi
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <TextField
                        type='text'
                        color='secondary'
                        label='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ input: { color: 'secondary.main' } }}
                        required
                    ></TextField>
                    <TextField
                        type='email'
                        color='secondary'
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ input: { color: 'secondary.main' } }}
                        required
                    ></TextField>
                    <TextField
                        type='text'
                        color='secondary'
                        label='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{ textarea: { color: 'secondary.main' } }}
                        multiline
                        rows={4}
                        required
                    ></TextField>
                </Stack>
                <Button
                    type='submit'
                    variant='outlined'
                    size='large'
                    color='secondary'
                    sx={{ mt: 4 }}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};
