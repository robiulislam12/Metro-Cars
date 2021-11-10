import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Car from '../../Car';

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://metro-car.herokuapp.com/cars6')
        .then(res=> {
            setCars(res.data)
        })
        .finally(()=> setIsLoading(false))
    },[])

    const handelClick = () =>{
        history.push('/cars')
    }
    return (
        <Box sx={{my:6}}>
            <Container>
                <Typography variant='h4' align='center'>Find your best car</Typography>
                {
                    isLoading && <div  style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
                    <CircularProgress color="success" />
                </div>
                }
                <Grid container spacing={3} my={5}>
                    {
                        cars.map(car => <Grid key={car.car_name} item xs={12} md={4}>
                            <Car  car={car}/>
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
