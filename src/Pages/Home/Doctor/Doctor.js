import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image, email} = doctor 
    return (
        <Grid item xs={12} sm={6} md={4}>
            <h2>{name}</h2>
            <p>{email}</p>
            <img style={{width: '200px', height: '200px'}} src={`data:image/png;base64,${image}`} alt=""/>
       </Grid>
    );
};

export default Doctor;