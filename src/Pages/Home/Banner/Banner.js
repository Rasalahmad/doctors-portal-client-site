import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container, Box } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {

    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid style={bannerBg} container spacing={2} sx={{ textAlign: 'left' }}>
                <Grid style={{...verticalCenter, textAlign: 'left'}} item xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Yur New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos iure nulla. Voluptatibus ea dolor laudantium quo provident est unde.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} md={5} style={verticalCenter}>
                    <img src={chair} alt="" style={{ width: '450px' }} />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;