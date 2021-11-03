import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} md={4}>
                <Paper elevatin={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: '600' }} variant="h5" gutterBottom="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom="div">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal 
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;