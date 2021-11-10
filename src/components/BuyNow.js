import { Alert, Box, Button, Container, Divider, Grid, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Footer from './Footer';
import Header from './Header';


export default function BuyNow() {
    const [cars, setCars] = useState({});
    const [order, setOrder] = useState({});
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);


    //get auth
    const {user} = useAuth()
    //Single Product id
    const {id} = useParams();
    //History
    const history = useHistory()

    
    useEffect(()=>{
        const uri = `https://metro-car.herokuapp.com/car/${id}`
        axios.get(uri)
        .then(res =>{
            setCars(res.data)
        })
    }, [id])

    const { car_name, car_img, car_description, car_price} = cars;

    document.title = `${car_name} - Metro Car`;

    const handleBlurChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...order};
        newUser[field] = value;
        setOrder(newUser);
    }
    const handleSubmit = e =>{
        const orders ={
            ...order,
            name: user.displayName,
            email: user.email,
            car_name,
            car_img,
        }
        
        axios.post('https://metro-car.herokuapp.com/order', orders)
        .then(res =>{
            if(res.data._id){
                setSuccess(true)
                setOpen(true);
                
                setTimeout(()=>{
                    history.push('/')
                }, 2000)
            }
        })
        

        e.preventDefault()
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div>
            <Header/>
                <Box sx={{my:15}}>
                    <Container>
                        <h1>Car Details page </h1>
                        {
                            success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                              Thanks for ordering.
                            </Alert>
                          </Snackbar>
                        }
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <img src={car_img} alt="" style={{borderRadius: '5px'}}/>
                                    <Divider textAlign="left">
                                        <h3>About the Car</h3>
                                    </Divider>
                                    <Typography variant="h5"> Car Name: <span style={{color:'#48AE52'}}>{car_name} </span></Typography>
                                    <Typography variant="h5" my={2}> Car Price: <span style={{color:'#48AE52'}}>${car_price} </span></Typography>
                                    <Typography paragraph>{car_description}</Typography>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                <form onSubmit={handleSubmit}>
                                    <TextField 
                                    type='text'
                                    name='name'
                                    defaultValue={user.displayName}
                                    disabled
                                    id="standard-basic" 
                                    label="Full Name" 
                                    sx={{width: '80%'}}
                                    variant="outlined" 
                                    onBlur={handleBlurChange}
                                    />
                                    <br/>
                                    <br/>
                                    <TextField 
                                    type='email'
                                    name='email'
                                    id="standard-basic" 
                                    label="Email" 
                                    disabled
                                    defaultValue={user.email}
                                    sx={{width: '80%'}}
                                    variant="outlined" 
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
                                    variant="outlined"
                                    required
                                    onBlur={handleBlurChange} />
                                    
                                    <br/>
                                    <br/>
                                    <TextField 
                                    sx={{width: '80%'}}
                                    type='number'
                                    name='address'
                                    multiline
                                    rows={4}
                                    required
                                    id="standard-basic" 
                                    label="Address" 
                                    variant="outlined"
                                    onBlur={handleBlurChange} />
                                    
                                    <br/>
                                    <br/>
                                    <Button type='submit' variant='contained' className='btn_bg' size='large'>Place a Order</Button>
                                    </form>
                                </Grid>
                            </Grid>

                        </Box>
                    </Container>
                </Box>
            <Footer/>
        </div>
    )
}
