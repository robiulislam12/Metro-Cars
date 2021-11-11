import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Beiben from '../../../assets/Beiben.png';
import BMW from '../../../assets/BMW.png';
import RollsRoyce from '../../../assets/Rolls-Royce.png';
import Tesla from '../../../assets/Tesla.png';
import Toyota from '../../../assets/Toyota.png';
import volvo from '../../../assets/Volvo.png';

export default function Sponsor() {
    return (
        <Box sx={{my:4}}>
          <Container>
          <Typography variant='h4' align='center'>Our Brands</Typography>
              <Grid container spacing={3} sx={{my:3}}>
                  <Grid item xs={6} md={2}>
                        <img src={volvo} alt="" style={{width:'100px'}}/>
                  </Grid>
                  <Grid item xs={6} md={2}>
                        <img src={BMW} alt="" style={{width:'100px'}}/>
                  </Grid>
                  <Grid item xs={6} md={2}>
                        <img src={Tesla} alt="" style={{width:'100px'}}/>
                  </Grid>
                  <Grid item xs={6} md={2}>
                        <img src={Toyota} alt="" style={{width:'100px'}}/>
                  </Grid>
                  <Grid item xs={6} md={2}>
                        <img src={Beiben} alt="" style={{width:'100px'}}/>
                  </Grid>
                  <Grid item xs={6} md={2}>
                        <img src={RollsRoyce} alt="" style={{width:'100px'}}/>
                  </Grid>
              </Grid>
          </Container>  
        </Box>
    )
}
