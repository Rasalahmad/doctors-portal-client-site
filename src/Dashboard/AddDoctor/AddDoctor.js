import React, { useState } from 'react';
import { TextField, Input, Button } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);


        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    setSuccess('Doctor Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h1>Add Doctor</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', my: '15px' }}
                    label="Name"
                    required
                    variant="standard"
                    onChange={e => setName(e.target.value)}
                    type="text"
                />
                <br />
                <TextField
                    sx={{ width: '50%', my: '15px' }}
                    label="Email"
                    required
                    variant="standard"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    sx={{ width: '50%', my: '15px' }} />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {success && <p style={{color: 'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;