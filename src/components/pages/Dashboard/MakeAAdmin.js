import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

export default function MakeAAdmin() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleSubmit = e =>{
        
        const userEmail ={email}

        axios.put(`https://metro-car.herokuapp.com/admin`, userEmail)
        .then(res => {
            if(res.data.modifiedCount > 0){
                setSuccess(true)
                setEmail('')
            }
        })
        
        e.preventDefault();
    }

    return (
        <div>
            <h1>Make a Admin</h1>
            {
                success && <Alert severity="success" sx={{mb: 4}}>Admin Added Successfully</Alert>
            }
            <form onSubmit={handleSubmit}>
                <TextField 
                    type='email'
                    name='email'
                    id="standard-basic" 
                    label="Email" 
                    sx={{width: '70%'}}
                    variant="outlined"
                    onBlur={(e)=> setEmail(e.target.value)} 
                />
                <br/>
                <br/>
                <Button type='submit' variant='contained' className='addBtn' size='large'>Make a Admin</Button>
            </form>
        </div>
    )
}
