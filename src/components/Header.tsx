import * as React from 'react';
import {
    Button,
    Typography,
    Toolbar,
    ListItemText,
    ListItemButton,
    ListItem,
    List,
    Drawer,
    Divider,
    Box,
    AppBar,
    IconButton,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { DownloadRounded, Menu } from '@mui/icons-material';

const drawerWidth: number = 240;
const navItems: string[] = ['home', 'skills', 'projects', 'contacts', 'resume'];

export const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerJSX: JSX.Element = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <Typography
                variant='h6'
                sx={{ my: 2 }}
                onClick={() => navigate('/')}
            >
                PORTFOLIO
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item}
                        disablePadding
                    >
                        <ListItemButton
                            component={NavLink}
                            to={item === 'home' ? '/' : item}
                            sx={{
                                textAlign: 'center',
                                '&.active': {
                                    backgroundColor:
                                        'rgba(144, 202, 249, 0.08)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={item.toUpperCase()}
                                disableTypography
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position='relative'
                component='nav'
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant='h5'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate('/')}
                    >
                        PORTFOLIO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                component={NavLink}
                                key={item}
                                to={item === 'home' ? '/' : item}
                                sx={{
                                    color: 'text.primary',
                                    '&.active': {
                                        backgroundColor:
                                            'rgba(144, 202, 249, 0.08)',
                                    },
                                }}
                                size='large'
                            >
                                {item}{' '}
                                {item === 'resume' && <DownloadRounded />}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawerJSX}
                </Drawer>
            </Box>
        </Box>
    );
};

// https://drive.google.com/file/d/1apJwYKFQnC_6m__wxhyRYDjpYUUXYNVL/view
// https://drive.google.com/uc?export=download&id=1apJwYKFQnC_6m__wxhyRYDjpYUUXYNVL
