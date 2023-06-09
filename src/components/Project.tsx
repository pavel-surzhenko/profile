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
            key={item}
            src={item}
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
                        transform: 'scale(1.05)',
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
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <Image
                            fit='contain'
                            duration={1000}
                            shift='top'
                            src={props.image}
                            style={{ borderRadius: '4px' }}
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
                                '& div > img': {
                                    '&:hover': { transform: 'scale(1.2)' },
                                },
                            }}
                        >
                            Made with:{madeWithJSX}
                        </Box>
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        pb={2}
                        sx={{ flex: '1' }}
                    >
                        {showMore
                            ? props.description + ' '
                            : trimText(props.description, SHORT_TEXT)}
                        {props.description.length > 70 && (
                            <Button
                                size='small'
                                onClick={() => setShowMore(!showMore)}
                                color='error'
                                sx={{ fontSize: { xs: '10px', sm: '13px' } }}
                            >
                                {showMore ? 'Show less' : 'Show more'}
                            </Button>
                        )}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: { xs: '90%', sm: '75%' },
                            m: '0 auto',
                            gap: 6,
                            alignSelf: 'end',
                            verticalAlign: 'bottom',
                        }}
                    >
                        <Button
                            variant='outlined'
                            component={NavLink}
                            to={props.code}
                            sx={{ color: 'text.secondary' }}
                            color='error'
                            size='large'
                            target='_blank'
                        >
                            <GitHub
                                color='secondary'
                                sx={{ pr: '5px' }}
                            />
                            Code
                        </Button>
                        <Button
                            variant='outlined'
                            component={NavLink}
                            to={props.live}
                            sx={{ color: 'text.secondary' }}
                            color='error'
                            size='large'
                            target='_blank'
                        >
                            <WebAsset
                                color='secondary'
                                sx={{ pr: '5px' }}
                            />
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
