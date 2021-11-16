import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'A compound of fluorine with another element or radical. Fluoride containing compounds are used topical and systemic in the prevention of tooth decay. Fluoride ions replace hydroxyl ions in hydroxyapatite in teeth, forming fluorapatite, which leads to fewer cavities',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'A compound of fluorine with another element or radical. Fluoride containing compounds are used topical and systemic in the prevention of tooth decay. Fluoride ions replace hydroxyl ions in hydroxyapatite in teeth, forming fluorapatite, which leads to fewer cavities',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'A compound of fluorine with another element or radical. Fluoride containing compounds are used topical and systemic in the prevention of tooth decay. Fluoride ions replace hydroxyl ions in hydroxyapatite in teeth, forming fluorapatite, which leads to fewer cavities',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'success.main', fontWeight: 600, m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide 
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;