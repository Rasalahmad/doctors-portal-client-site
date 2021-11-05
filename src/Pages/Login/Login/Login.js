import React, {useState} from 'react';
import {TextField, Container, Grid, Typography, Button, CircularProgress, Alert} from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState([])
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                    <Typography variant="h3" gutterBottom>
                        Login
                    </Typography>
                    {isLoading ? <CircularProgress /> :
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
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
                            <Button 
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                            >Login</Button>
                            <NavLink
                            style={{textDecoration: 'none'}}
                             to='/register'>
                                <Button variant='text'>New User? Please Register</Button>
                            </NavLink>
                    </form>}
                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={4}>
                    <img style={{width : '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;