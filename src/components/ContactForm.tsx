import { Typography, Box, TextField, Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

export const ContactForm: React.FC = () => {
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

    const onSubmit = handleSubmit((data: FormData) => console.log(data));

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
            <form onSubmit={onSubmit}>
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
                <Button
                    type='submit'
                    variant='outlined'
                    size='large'
                    color='secondary'
                    sx={{ mt: 4 }}
                    disabled={isFormValid()}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};

type FormData = yup.InferType<typeof schema>;
