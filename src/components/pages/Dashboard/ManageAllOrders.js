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



export default function ManageAllOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        axios.get('https://metro-car.herokuapp.com/orders')
        .then(res =>{
            setOrders(res.data)
        })
    }, [])
    return (
        <div>
            <h1>All Orders Here</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow sx={{backgroundColor:'#4BB155'}}>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Cars Name</TableCell>
                    <TableCell>Customer Email</TableCell>
                    <TableCell>Customer Phone No</TableCell>
                    <TableCell>Cars Image</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((order) => (
                    <TableRow
                    key={order.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th">
                            {order.name}
                        </TableCell>
                        <TableCell>{order.car_name}</TableCell>
                        <TableCell>{order.email}</TableCell>
                        <TableCell>{order.phone}</TableCell>
                        <TableCell>
                            <img src={order.car_img} alt="" style={{width: '50px'}} />
                        </TableCell>
                        <TableCell>
                            <Button variant='contained'>Pending</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
