import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function MangeProducts() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://metro-car.herokuapp.com/cars')
        .then(res =>{
            setProducts(res.data)
        })
    }, [products])

    //delete Order
    const handleDelivery = (id)=>{

        if(id){
            const isAgree =  prompt('Are you sure? Type "yes"')
            if(isAgree === 'yes'){
                /* axios.delete(`https://metro-car.herokuapp.com/car/${id}`) */
                axios.delete(`https://metro-car.herokuapp.com/car/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        alert('Delete Successful')
                    }
                })
            }
            else{
                return
            }
        }
        
    }
    return (
        <div>
            <h1>Manage All Products</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow sx={{backgroundColor:'#4BB155'}}>
                    <TableCell>Cars Name</TableCell>
                    <TableCell>Cars Image</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((car) => (
                    <TableRow
                    key={car.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       
                        <TableCell>{car.car_name}</TableCell>
                        <TableCell>
                            <img src={car.car_img} alt="" style={{width: '50px'}} />
                        </TableCell>
                        <TableCell>
                            <Button variant='contained' color='error' style={{marginLeft: '10px'}} onClick={()=>handleDelivery(car._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
