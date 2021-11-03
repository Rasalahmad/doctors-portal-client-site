import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid style={appointmentBanner} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h6" sx={{mb: 5}} style={{ color: '#5CE7ED' }} component="div">
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }} component="div">
                            Make an Appointment <br /> Today
                        </Typography>
                        <Typography variant="p" sx={{ my: 5 }} style={{ color: 'white', fontWeight: 300 }} component="div">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias totam quam facilis. Quasi vitae voluptas pariatur iure perspiciatis ea enim!
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;