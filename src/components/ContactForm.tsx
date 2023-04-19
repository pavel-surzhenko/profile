import {
    Typography,
    Box,
    TextField,
    Stack,
    CircularProgress,
    styled,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Send } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'mui-image';
import contactImage from '../assets/image/contact.svg';

const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup
        .string()
        .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .required(),
    message: yup.string().min(10).required(),
});

const Form = styled('form')(() => ({
    flex: '0 0 50%',
}));

export const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [sendStatus, setSendStatus] = useState('Send');
    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    });

    const isFormValid = (): boolean => !isValid;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        trigger(event.target.name as keyof FormData);
        setValue(event.target.name as keyof FormData, event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const onSubmit = handleSubmit((data: FormData) => {
        setLoading(true);
        emailjs
            .sendForm(
                'service_avjr0ze',
                'template_4357xjz',
                '#contact-form',
                'Fh9klGWCj6UrF5qHb'
            )
            .then(() => {
                setLoading(false);
                setSendStatus('success');
            })
            .catch((error: unknown) => {
                setLoading(false);
                setSendStatus('failed');
            });
    });

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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Form
                    id='contact-form'
                    onSubmit={onSubmit}
                >
                    <Stack spacing={4}>
                        <TextField
                            {...register('name')}
                            error={!!errors.name}
                            color='secondary'
                            label='Name'
                            onChange={handleChange}
                            sx={{ input: { color: 'secondary.main' } }}
                        ></TextField>
                        <TextField
                            {...register('email')}
                            error={!!errors.email}
                            color='secondary'
                            label='Email'
                            onChange={handleChange}
                            sx={{ input: { color: 'secondary.main' } }}
                        ></TextField>
                        <TextField
                            {...register('message')}
                            error={!!errors.message}
                            color='secondary'
                            label='Message'
                            onChange={handleChange}
                            sx={{ textarea: { color: 'secondary.main' } }}
                            multiline
                            rows={4}
                        ></TextField>
                    </Stack>
                    <LoadingButton
                        type='submit'
                        variant='outlined'
                        size='large'
                        color={
                            sendStatus === 'success'
                                ? 'success'
                                : sendStatus === 'failed'
                                ? 'error'
                                : 'secondary'
                        }
                        sx={{
                            mt: 4,
                            '&.Mui-disabled': {
                                color:
                                    sendStatus === 'success' ? '#2e7d32' : '',
                            },
                        }}
                        disabled={isFormValid() || sendStatus === 'success'}
                        endIcon={<Send />}
                        loading={loading}
                        loadingPosition='end'
                    >
                        {sendStatus}
                    </LoadingButton>
                </Form>
                <Image
                    src={contactImage}
                    fit='contain'
                    duration={1000}
                    shift='top'
                    sx={{ maxWidth: '100%%', maxHeight: '100%' }}
                    showLoading={<CircularProgress color='error' />}
                />
            </Box>
        </Box>
    );
};

type FormData = yup.InferType<typeof schema>;
