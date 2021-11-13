import { TextField,Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handelOnBlur=e=>{
        setEmail(e.target.value);
    }
    const handelAdminSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h2>make a admin </h2>
            <form onSubmit={handelAdminSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    label="Your Email"
                    type="email"
                    onBlur={handelOnBlur}
                    variant="standard" />
                    <Button sx={{width:'75%',m:1,backgroundColor:'#093150'}}  type="submit" variant="contained">Make A Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;