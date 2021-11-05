import React, {useState} from 'react';
import {TextField, Container, Grid, Typography, Button, CircularProgress, Alert} from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your Password Did Not Match');
            return;
        }
        else{
            registerUser(loginData.email, loginData.password)
        }

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                    <Typography variant="h3" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type Password"
                            name="password2"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />
                            <Button 
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                            >Register</Button>
                            <NavLink
                            style={{textDecoration: 'none'}}
                             to='/login'>
                                <Button variant='text'>Already Register? Please Login</Button>
                            </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={4}>
                    <img style={{width : '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;