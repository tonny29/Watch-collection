import React ,{useState} from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth'; 


const Register = () => {
    const [loginData,setLoginData]=useState({});
    const {user,registerUser,isLoading,authError}=useAuth();
    const history=useHistory();


    const loginHandeler=e=>{
        if(loginData.password !== loginData.password2){
            alert('your password is not match,try again.');
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    const onChngeBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register Here</Typography>
                {!isLoading && <form onSubmit={loginHandeler}>
                    <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" label="Your Name"
                    name="name"
                    type="text"
                    onBlur={onChngeBlur}
                    variant="standard" />
                    <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" label="Your Email"
                    name="email"
                    type="email"
                    onBlur={onChngeBlur}
                    variant="standard" />
                    <TextField
                     sx={{width:'75%',m:1}}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={onChngeBlur}
                    variant="standard"
                    required
                    />
                    <TextField
                     sx={{width:'75%',m:1}}
                    id="standard-basic"
                    label="Re-type Password"
                    type="password"
                    name="password2"
                    onBlur={onChngeBlur}
                    variant="standard"
                    required
                    />
                    <Button sx={{width:'75%',m:1,backgroundColor:'#093150'}} type="submit" variant="contained">Registered</Button>
                  
                    <hr />
                    <NavLink style=
                    {{textDecoration:'none'}}  
                    to="/login">
                        <Button variant="text" sx={{marginBottom:'10px'}}>Already Registered? <br />Please Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress/>}
                {user?.email && <Alert severity="success">User Created Succecfully!!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"77%",marginTop:'10px'}} src="https://m.media-amazon.com/images/I/71KHK2odYXL._AC_UX522_.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Register;