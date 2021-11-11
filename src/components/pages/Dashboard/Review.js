import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Rating from 'react-rating';
import EmptyStar from '../../../assets/empty-star.png';
import Star from '../../../assets/star.png';
import useAuth from '../../../hooks/useAuth';

export default function Review() {

    const [rate, setRate] = useState(0)
    const [reviews , setReviews] = useState({})
    const {user} = useAuth();
    
    const handleBlurChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRatings = {...reviews};
        newRatings[field] = value;
        setReviews(newRatings);
    }

    const handleSubmit = e =>{
        let imgUrl;
        if(user.photoURL){
            imgUrl = user.photoURL
        } else{
            imgUrl = 'https://i.ibb.co/FY1k4WM/avator.png';
        }

        const review ={
            name: user?.displayName,
            avatar: imgUrl,
            ratings: rate,
            ...reviews
        }

        axios.post('https://metro-car.herokuapp.com/review', review)
        .then(res =>{
            if(res.data.insertedId){
                alert('review added successfully')
            }
        })
        e.preventDefault()
    }

    return (
        <Box>
            <Typography variant='h4'>Add a Review</Typography>
            <Box mt={3}>
                <form onSubmit={handleSubmit}>
                    <Rating
                        onChange={rate => setRate(rate)}
                        fractions={2}
                        emptySymbol={<img src={EmptyStar} alt='' style={{width:'30px'}}/>}
                        fullSymbol={<img src={Star} alt='' style={{width:'30px'}}/>}
                    />
                    <br/>
                    <br/>
                    <TextField 
                    type='text'
                    name='description' 
                    multiline
                    rows={4}
                    label="Add your review" 
                    sx={{width: '50%'}}
                    variant="outlined" 
                    onBlur={handleBlurChange}
                    />
                    <br/>
                    <br/>
                    <Button type='submit' variant='contained' color='success' size='large'>Add review</Button>
                </form>
            </Box>
        </Box>
    )
}
