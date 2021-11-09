import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';


export default function Navigation() {

    const {user , logOut} = useAuth()

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
                {
                    user?.email ? (
                    <>
                        <Link to='/dashboard'><span style={{color: '#000000', marginRight:'10px'}}>Dashboard</span></Link>
                        <span style={{color: '#4BB155', marginRight:'10px'}}>{user.displayName}</span>
                        <Button variant='contained' color="error" onClick={logOut}>Log Out</Button>
                    </>)
                    :

                    (<><Link to='/login'><Button variant='contained'>Login</Button></Link></>)
                }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
