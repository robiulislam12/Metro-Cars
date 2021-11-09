import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterImg from '../../assets/welcome.svg';

export default function Register() {
    return (
        <Box sx={{my: 10}}>
            <Container>
                <Grid container spacing={4} className="pt-8">
                    <Grid align='center' item xs={12} md={6} sx={{backgroundColor: '#fff', p:4, borderRadius: '5px'}}>
                        <Typography variant="h4">Register</Typography>
                        <form>
                            <TextField 
                            type='text'
                            name='name'
                            id="standard-basic" 
                            label="Full Name" 
                            sx={{width: '80%'}}
                            variant="standard" />
                            <br/>
                            <br/>
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
                            type='number'
                            name='phone'
                            id="standard-basic" 
                            label="Phone Number" 
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
                            <TextField 
                            sx={{width: '80%'}}
                            type='password'
                            name='confirm_password'
                            id="standard-basic" 
                            label="Re-type Password" 
                            variant="standard" />
                            <br/>
                            <br/>
                            <Button type='submit' variant='contained' className='btn_bg' size='large'>Create My Account</Button>
                            <p>Already have an account? 
                                <Link to='/login'>
                                    <span style={{textDecoration: 'underline', fontWeight:'700', color:'#4BB155'}}> Login here</span>
                                </Link>
                            </p>
                        </form>
                        <Button variant='contained'>Google Sign Up</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={RegisterImg} alt=""/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
