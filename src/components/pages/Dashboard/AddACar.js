import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


export default function AddACar() {
    const [car, setCar] = useState({});
    const [success, setSuccess] = useState(false)


    const handleBlurChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...car};
        newUser[field] = value;
        setCar(newUser);
        
    }
    const handleSubmit = e =>{

        const newCar = {...car}
        
        axios.post('http://localhost:5000/cars', newCar)
        .then(res => {
            if(res.data.insertedId){
                setSuccess(true)
            }
        })
        
        e.preventDefault();
    }

    return (
        <div>
            <h1>Add a car</h1>
            {
                success && <Alert severity="success" sx={{mb: 4}}>Car Added Successfully</Alert>

            }
            <form onSubmit={handleSubmit}>
                <TextField 
                    type='text'
                    name='car_name'
                    id="standard-basic" 
                    label="Car Name" 
                    sx={{width: '70%'}}
                    variant="outlined"
                    onBlur={handleBlurChange} 
                />
                <br/>
                <br/>
                <TextField 
                    type='url'
                    name='car_img'
                    id="standard-basic" 
                    label="Car Image Url" 
                    sx={{width: '70%'}}
                    variant="outlined" 
                    onBlur={handleBlurChange}
                />
                <br/>
                <br/>
                <TextField 
                    type='text'
                    name='car_price'
                    id="standard-basic" 
                    label="Car Price" 
                    sx={{width: '70%'}}
                    variant="outlined" 
                    onBlur={handleBlurChange}
                />
                <br/>
                <br/>
                <TextField 
                    type='text'
                    multiline
                    rows={4}
                    name='car_description'
                    id="standard-basic" 
                    label="Car Description" 
                    sx={{width: '70%'}}
                    variant="outlined" 
                    onBlur={handleBlurChange}
                />
                <br/>
                <br/>
                <Button type='submit' variant='contained' className='addBtn' size='large'>Add Car</Button>

            </form>
        </div>
    )
}
