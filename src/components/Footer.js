import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <Box sx={{backgroundColor:'#fff', py:3,}}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                    <Link to='/'>
                            <img style={{width: '200px'}} src={logo} alt="" className="logo" />
                        </Link>
                    </Box>
                    <Box>
                        <Link to='/home'><Button>Home</Button></Link>
                        <Link to='/cars'><Button>Cars</Button></Link>
                    </Box>
                </Box> 
                <Divider sx={{my:2}}/>
                <Typography align='center'>2021 MetroCars. All Rights reserved</Typography>
            </Container>
        </Box>
    )
}
