import { Box, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Car from '../../Car';

export default function Cars() {
    const [cars, setCars] = useState([]);
    const history = useHistory()

    useEffect(()=>{
        axios.get('http://localhost:5000/cars6')
        .then(res=> {
            setCars(res.data)
        })
    },[])

    const handelClick = () =>{
        history.push('/cars')
    }
    return (
        <Box sx={{my:6}}>
            <Container>
                <Typography variant='h4' align='center'>Find your best car</Typography>
                <Grid container spacing={3} my={5}>
                    {
                        cars.map(car => <Grid item xs={12} md={4}>
                            <Car key={car._id} car={car}/>
                        </Grid>)
                    }
                </Grid>
               <Typography align='center'>
                   <Button onClick={handelClick} variant='contained' size='large'>View All Cars</Button>
               </Typography>
            </Container>
        </Box>
    )
}
