import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';


export default function HeroSection() {
    return (
        <Box className='hero_banner'>
            <Container>
                <Grid container spacing={3} py={10}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">Research. Compare.</Typography>
                        <Typography color='#48AE52' variant="h3" py={1}>Find What's Right for You.</Typography>
                        <Typography variant="base">Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</Typography>
                        <br/>
                        <Button variant='contained' className="btn">Learn More</Button>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            </Container>
        </Box>
    )
}
