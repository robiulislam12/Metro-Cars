import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AboutImg from '../../../assets/about.png';

export default function AboutUs() {
    return (
        <Box sx={{my:10}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3'>About Us</Typography>
                        <Typography paragraph my={2}>we are very user friendly and our service is very good.If You believe our, you will not mistake. We customize your favorite car and you choose a which is best we will create for your.</Typography>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} >
                                    <Typography variant='h3'>150</Typography>
                                    <Typography paragraph>Vehicle In Stock</Typography>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Typography variant='h3'>40</Typography>
                                    <Typography paragraph>Sold Car</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h3'>135+</Typography>
                                    <Typography paragraph>Happy Customer</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h3'>4.9</Typography>
                                    <Typography paragraph>Average Awards</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={AboutImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
