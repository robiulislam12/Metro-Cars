import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import EmptyStar from '../../../assets/empty-star.png';
import Star from '../../../assets/star.png';


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
                                <img src={review?.avatar} alt="" style={{width:'100px', height:'100px', borderRadius:"50%" }}/>
                                <Typography paragraph my={1}>{review?.description}</Typography>
                                <Rating
                                    initialRating={review?.ratings}
                                    emptySymbol={<img src={EmptyStar} alt='' className="icon" />}
                                    fullSymbol={<img src={Star} alt='' className="icon" />}
                                    readonly
                                    style={{marginBottom: '15px'}}
                                />
                                <Typography paragraph>{review?.name}</Typography>
                            </Paper>
                        </Grid>)
                    }
                </Grid>

            </Container>
        </Box>
    )
}
