import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../../HeroSection'
import Cars from './Cars'
import Review from './Review'

export default function Home() {
    return (
        <Box sx={{mt: 10}}>
            <HeroSection/>
            <Cars/>
            <Review/>
        </Box>
    )
}
