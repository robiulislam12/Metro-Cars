import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import HeroSection from '../../HeroSection'
import AboutUs from './AboutUs'
import Cars from './Cars'
import Review from './Review'
import Sponsor from './Sponsor'

export default function Home() {
    return (
        <>
        <Header/>
            <Box sx={{mt: 10}}>
                <HeroSection/>
                <AboutUs/>
                <Cars/>
                <Review/>
                <Sponsor/>
            </Box>
        <Footer/>
        </>
    )
}
