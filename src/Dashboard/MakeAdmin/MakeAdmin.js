import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Alert} from '@mui/material';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const {token} = useAuth();


    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://calm-bastion-45127.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    console.log(result);
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
                {success && <Alert severity="success">Add Admin Successfully</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;