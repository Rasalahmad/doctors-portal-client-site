import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';


const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item sx={12} md={6}>
                    <img src={chair} style={{ width: '100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;