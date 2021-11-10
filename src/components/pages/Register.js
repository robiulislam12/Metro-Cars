import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import RegisterImg from '../../assets/welcome.svg';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer';
import Header from '../Header';

export default function Register() {
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation()
    const {register} = useAuth()

    const handleBlurChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    const handleSubmit = e =>{
        const {name, email, password, confirm_password, phone} = user;
        if(password !== confirm_password){
            alert('password did not match!')
        }
        else{
            register(email, password, name, phone, history, location)
        }


        
        e.preventDefault();
    }
    return (
        <>
        <Header/>
        
        <Box sx={{my: 10}}>
            <Container>
                <Grid container spacing={4} className="pt-8">
                    <Grid align='center' item xs={12} md={6} sx={{backgroundColor: '#fff', p:4, borderRadius: '5px'}}>
                        <Typography variant="h4">Register</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                            type='text'
                            name='name'
                            id="standard-basic" 
                            label="Full Name" 
                            sx={{width: '80%'}}
                            variant="standard" 
                            onBlur={handleBlurChange}
                            />
                            <br/>
                            <br/>
                            <TextField 
                            type='email'
                            name='email'
                            id="standard-basic" 
                            label="Email" 
                            sx={{width: '80%'}}
                            variant="standard" 
                            onBlur={handleBlurChange}
                            />
                            <br/>
                            <br/>
                            <TextField 
                            sx={{width: '80%'}}
                            type='number'
                            name='phone'
                            id="standard-basic" 
                            label="Phone Number" 
                            variant="standard"
                            onBlur={handleBlurChange} />
                            <br/>
                            <br/>
                            <TextField 
                            sx={{width: '80%'}}
                            type='password'
                            name='password'
                            id="standard-basic" 
                            label="Password" 
                            variant="standard"
                            onBlur={handleBlurChange} />
                            <br/>
                            <br/>
                            <TextField 
                            sx={{width: '80%'}}
                            type='password'
                            name='confirm_password'
                            id="standard-basic" 
                            label="Re-type Password" 
                            variant="standard" 
                            onBlur={handleBlurChange}/>
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
        <Footer/>
        </>
    )
}
