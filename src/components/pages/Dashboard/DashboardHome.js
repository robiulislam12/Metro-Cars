import { Box, Typography } from '@mui/material';
import React from 'react';
import welcome from '../../../assets/welcome.svg';

export default function DashboardHome() {
    return (
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h4' mb={4}>Welcome to Dashboard</Typography>
            <img src={welcome} alt="" style={{width:'70%'}}/>
        </Box>
    )
}
