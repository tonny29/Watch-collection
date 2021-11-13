import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';



const BuyWatch = () => {
    const {user}=useAuth();
    const submitInfo=e=>{
        e.preventDefault();
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Added Info For Buy Watch</Typography>
                    <form onSubmit={submitInfo}>
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" label="Your Email"
                        name="email"
                        // onChange={onChngeHandeler}
                        variant="standard" />
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="Product name"
                        name="name"
                        // onChange={onChngeHandeler}
                        variant="standard" />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="product price"
                        name="Price"
                        // onChange={onChngeHandeler}
                        variant="standard"
                        />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="Your Address"
                        name="your address"
                        // onChange={onChngeHandeler}
                        variant="standard"
                        />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="phone number"
                        name="your phone number"
                        // onChange={onChngeHandeler}
                        variant="standard"
                        />
                        <Button sx={{width:'75%',m:1,backgroundColor:'#093150'}} type="submit" variant="contained">Submit To Add</Button>
                        {/* {isLoading && <CircularProgress/>}
                        {user?.email && <Alert severity="success">User Login Succecfully!!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>} */}
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src="https://m.media-amazon.com/images/I/81WNw2Y1pmL._AC_UX679_.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default BuyWatch;