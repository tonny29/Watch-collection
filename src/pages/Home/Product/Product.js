import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const {_id,name,description,price,image}=props.watchAll;
    return (  
        <Card sx={{ display: 'flex',margin:'23px 10px 10px 10px',width:'350px',height:'300px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="text" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography variant="subtitle1"component="div">
            {price}
          </Typography>
          <NavLink  className="button-style" to='/dashboard/buyProduct'>
          <NavLink to={`/BuyWatch/${_id}`}
          ><button  style={{textDecoration:'none'}}>Buy Now</button></NavLink>
            </NavLink>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 155 }}
        image={image}
      />
    </Card> 
    );
};

export default Product;
