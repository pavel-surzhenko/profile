import { GitHub, WebAsset } from '@mui/icons-material';
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import Image from 'mui-image';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Project: React.FC<IProjectProps> = (props) => {
    const [elevation, setElevation] = useState(2);
    const [showMore, setShowMore] = useState(false);
    const SHORT_TEXT = 70;

    const trimText = (text: string, length: number, end = '...'): string => {
        let index = text.indexOf(' ', length);
        if (index == -1) return text;
        return text.slice(0, index) + end;
    };

    const madeWithJSX = props.made.map((item) => (
        <Image
            width='35px'
            src={item}
            sx={{
                '&:hover': { transform: 'scale(1.2)' },
            }}
        />
    ));

    return (
        <Grid
            item
            sm={6}
            lg={4}
            xs={12}
        >
            <Paper
                elevation={elevation}
                sx={{
                    '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 4px 3px rgba(229, 9, 20, 0.461)',
                    },
                    transition: 'all 0.3s linear',
                    boxShadow: '0 3px 3px 2px rgba(229, 9, 20, 0.200)',
                    height: '100%',
                    width: { xs: '80%', sm: '100%' },
                    m: '0 auto',
                }}
                onMouseEnter={() => setElevation(6)}
                onMouseLeave={() => setElevation(2)}
            >
                <Box
                    p={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Box
                        pb={2}
                        sx={{ position: 'relative' }}
                    >
                        <Image
                            fit='contain'
                            duration={1000}
                            shift='top'
                            src={props.image}
                            sx={{ borderRadius: '4px' }}
                            showLoading={<CircularProgress color='error' />}
                        />
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
                                gap: { xs: '10px', sm: '5px', lg: '10px' },
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Made with:{madeWithJSX}
                        </Box>
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        pb={2}
                        sx={{ flex: '1', lineClamp: '2', display: 'box' }}
                    >
                        {showMore
                            ? props.description
                            : trimText(props.description, SHORT_TEXT)}
                        {props.description.length > 70 && (
                            <Button
                                size='small'
                                onClick={() => setShowMore(!showMore)}
                                sx={{ ml: 1 }}
                                color='error'
                            >
                                {showMore ? 'Show less' : 'Show more'}
                            </Button>
                        )}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '75%',
                            m: '0 auto',
                            gap: '25px',
                            alignSelf: 'end',
                            verticalAlign: 'bottom',
                        }}
                    >
                        <Button
                            variant='outlined'
                            component={NavLink}
                            to={props.code}
                            sx={{ color: 'text.primary' }}
                            color='error'
                            size='large'
                            target='_blank'
                        >
                            <GitHub sx={{ pr: '5px' }} />
                            Code
                        </Button>
                        <Button
                            variant='outlined'
                            component={NavLink}
                            to={props.live}
                            sx={{ color: 'text.primary' }}
                            color='error'
                            size='large'
                            target='_blank'
                        >
                            <WebAsset sx={{ pr: '5px' }} />
                            Demo
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

interface IProjectProps {
    name: string;
    code: string;
    live: string;
    image: string;
    made: string[];
    description: string;
}
