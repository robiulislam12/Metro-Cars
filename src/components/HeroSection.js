import { Box, Container, Grid } from '@mui/material';
import React from 'react';


export default function HeroSection() {
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            </Container>
        </Box>
    )
}
