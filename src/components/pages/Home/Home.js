import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import HeroSection from '../../HeroSection'
import Cars from './Cars'
import Review from './Review'

export default function Home() {
    return (
        <>
        <Header/>
            <Box sx={{mt: 10}}>
                <HeroSection/>
                <Cars/>
                <Review/>
            </Box>
        <Footer/>
        </>
    )
}
