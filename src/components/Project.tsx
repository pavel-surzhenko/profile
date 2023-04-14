import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'mui-image';

export const Project: React.FC<IProjectProps> = (props) => {
    const madeWithJSX = props.made.map((item) => (
        <Image
            width='35px'
            src={item}
            sx={{ '&:hover': { transform: 'scale(1.2)' } }}
        />
    ));

    return (
        <Grid
            item
            sm={4}
            xs={12}
        >
            <Paper elevation={4}>
                <Box p={3}>
                    <Box pb={2}>
                        <Image src={props.imagePC} />
                    </Box>
                    <Typography
                        variant='h6'
                        textAlign='center'
                        color='text.secondary'
                        pb={2}
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        variant='h6'
                        color='text.secondary'
                        pb={2}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                textAlign: 'center',
                            }}
                        >
                            Made with:{madeWithJSX}
                        </Box>
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                    >
                        {props.description}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

interface IProjectProps {
    name: string;
    code: string;
    live: string;
    imagePC: string;
    imageMob: string;
    made: string[];
    description: string;
}
