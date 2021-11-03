import React from 'react';
import { Grid } from '@mui/material';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <Grid item xs={12} md={4}>
            <h1>This is booking</h1>
        </Grid>
    );
};

export default Booking;