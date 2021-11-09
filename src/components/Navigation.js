import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className='menu_bar'>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    <Link to='/'>
                        <img style={{width: '200px'}} src={logo} alt="" className="logo" />
                    </Link>
                </Box>
                <Link to='/login'><Button variant='contained'>Login</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
