import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess}) => {
    const { name, time, space, price } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} md={4}>
                <Paper elevatin={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: '600' }} variant="h5" gutterBottom="body1">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom="body1">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom="body1">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom="body1">
                        Price: ${price}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;