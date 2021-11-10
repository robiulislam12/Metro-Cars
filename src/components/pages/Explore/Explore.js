import { Box, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Car from '../../Car';
import Footer from '../../Footer';
import Header from '../../Header';



export default function Explore() {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        axios.get('https://metro-car.herokuapp.com/cars')
        .then(res=> {
            setCars(res.data)
        })
    },[])
    return (
        <>
         <Header/>
            <Box sx={{my:15}}>
                <Container>
                    <Typography variant='h4' align='center'>Chose Your Best Car</Typography>
                    <Grid container spacing={3} my={5}>
                        {
                            cars.map(car => <Grid item xs={12} md={4}>
                                <Car key={car._id} car={car}/>
                            </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>
        <Footer/>
        </>
    )
}
