
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [loginData,setLoginData]=useState({});
    const {user,loginUser,isLoading,authError,signInWithGoogle}=useAuth();


    const location=useLocation();
    const history=useHistory()

    const loginHandeler=e=>{
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }
    const onChngeHandeler=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

    const handelGoogleSignIn=()=>{
        signInWithGoogle(location,history);
    }
    return (
        <div>
            <Navigation></Navigation>
        <Container>
 
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={loginHandeler}>
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" label="Your Email"
                        name="email"
                        onChange={onChngeHandeler}
                        variant="standard" />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={onChngeHandeler}
                        variant="standard"
                        />
                        <Button sx={{width:'75%',m:1,backgroundColor:'#093150'}} type="submit" variant="contained">Login</Button>
                        {isLoading && <CircularProgress/>}
                        {user?.email && <Alert severity="success">User Login Succecfully!!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <hr />
                        <NavLink style=
                        {{textDecoration:'none'}}  
                        to="/register">
                            <Button variant="text">New User? <br />Please Register Frist. </Button>
                        </NavLink>
                    </form>
                    <Button onClick={handelGoogleSignIn} variant="contained" sx={{backgroundColor:'#093150'}}>Google Sign In</Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0063/5165/0905/files/website_home_page_2_2000x.png?v=1627303370" alt="" />
                </Grid>
            </Grid>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Login;