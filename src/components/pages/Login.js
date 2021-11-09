import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginImg from '../../assets/welcome.svg';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer';
import Header from '../Header';

export default function Login() {

    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation()
    return (
        <>
        <Header/>

        <Box sx={{my: 10}}>
            <Container>
                <Grid container spacing={4} className="pt-8">
                    <Grid align='center' item xs={12} md={6} sx={{backgroundColor: '#fff', p:4, borderRadius: '5px'}}>
                        <Typography variant="h4">Login</Typography>
                        <form>
                            <TextField 
                            type='email'
                            name='email'
                            id="standard-basic" 
                            label="Email" 
                            sx={{width: '80%'}}
                            variant="standard" />
                            <br/>
                            <br/>
                            <TextField 
                            sx={{width: '80%'}}
                            type='password'
                            name='password'
                            id="standard-basic" 
                            label="Password" 
                            variant="standard" />
                            <br/>
                            <br/>
                            <Button type='submit' variant='contained' className='btn_bg' size='large'>Login</Button>
                            <p>Don’t have an account? 
                                <Link to='/register'>
                                    <span style={{textDecoration: 'underline', fontWeight:'700', color:'#4BB155'}}> Register here</span>
                                </Link>
                            </p>
                        </form>
                        <Button variant='contained' onClick={() => signInUsingGoogle(location, history)}>Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={LoginImg} alt=""/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Footer/>
    </>
    )
}
