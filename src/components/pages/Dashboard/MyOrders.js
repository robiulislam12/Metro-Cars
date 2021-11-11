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
import useAuth from '../../../hooks/useAuth';

export default function MyOrders() {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth()
    
    useEffect(()=>{
        const url = `https://metro-car.herokuapp.com/user/order/${user?.email}`;
        axios.get(url)
        .then(res =>{
            setOrders(res.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders])

    //delete Order
    const handleDelete = (id)=>{

        if(id){
            const isAgree =  prompt('Are you Sure to delete it? Type "yes"')
            if(isAgree === 'yes'){
                axios.delete(`https://metro-car.herokuapp.com/orders/${id}`)
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
            <h1>My All Orders</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow sx={{backgroundColor:'#4BB155'}}>
                    <TableCell>Cars Name</TableCell>
                    <TableCell align='center'>Cars Image</TableCell>
                    <TableCell align='center'>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((order) => (
                    <TableRow
                    key={order._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th">
                            {order.car_name}
                        </TableCell>
                        <TableCell align='center'>
                            <img src={order.car_img} alt="" style={{width: '50px'}} />
                        </TableCell>
                        <TableCell align='center'>
                            <Button variant='contained' >Pending</Button>
                            <Button variant='contained' color='error' style={{marginLeft: '10px'}} onClick={()=>handleDelete(order._id)}>X</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
