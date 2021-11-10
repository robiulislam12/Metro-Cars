import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

export default function Review() {

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
            ...reviews
        }

        axios.post('http://localhost:5000/review', review)
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
                    <TextField 
                    type='number'
                    name='ratings'
                    label="Please Give a ratings(1 to 5)" 
                    sx={{width: '50%'}}
                    variant="outlined" 
                    onBlur={handleBlurChange}
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
