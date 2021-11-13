import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const {user,logOut}=useAuth();
    return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:'#093150'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
            <Typography variant="h6" component="div" >
           WATCH WORLD
           </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
            <NavLink style={{textDecorationLine:'none',color:'white'}} to='/home'>
                <Button color="inherit">Home</Button>
             </NavLink>
             <NavLink style={{textDecorationLine:'none',color:'white'}} to='/explore'>
                 <Button color="inherit">Explore</Button>
             </NavLink>
             
            {user?.email? 
              <Box>
                <NavLink style={{textDecorationLine:'none',color:'white'}} to='/dashboard'>
                <Button color="inherit">Dasboard</Button>
                </NavLink>
                <Button onClick={logOut} color="inherit">Log Out</Button>
              </Box>
              :
              <NavLink style={{textDecorationLine:'none',color:'white'}} to='/login'>
              <Button color="inherit">Login</Button>
              </NavLink>  
            }
            </Grid>
  
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;



