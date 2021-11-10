import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        axios.get('https://metro-car.herokuapp.com/reviews')
        .then(res => {
            setReviews(res.data)
        })
    }, [])
    return (
        <Box sx={{my:8}}>
            <Container>
                <Typography variant='h4' align='center'>Find Our Customer Feedback</Typography>

                <Grid container spacing={3} my={3}>
                    {
                        reviews.map(review => <Grid key={review._id} item xs={12} md={4}>
                            <Paper evolution='1' align='center' sx={{p: 4}}>
                            <Typography paragraph >Ratings: <span style={{color:'#4BB155', fontWeight:'700', fontSize:'24px'}}>{review?.ratings}/5</span></Typography>
                                <Typography paragraph>{review?.description}</Typography>
                                <img src={review?.avatar} alt="" style={{width:'35px', height:'35px', borderRadius:"50%" }}/>
                                <Typography paragraph>{review?.name}</Typography>
                            </Paper>
                        </Grid>)
                    }
                </Grid>

            </Container>
        </Box>
    )
}
