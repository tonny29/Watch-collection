import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1,backgroundColor:'red' }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" >
            WATCH COLLECTION'S FOR YOU
          </Typography>
          <Box sx={{marginLeft:'50%'}}>
            <NavLink style={{textDecorationLine:'none',color:'white'}} to='/home'>
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink style={{textDecorationLine:'none',color:'white'}} to='/explore'>
                <Button color="inherit">Explore</Button>
            </NavLink>
            <NavLink style={{textDecorationLine:'none',color:'white'}} to='/login'>
                <Button color="inherit">Login</Button>
            </NavLink>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;