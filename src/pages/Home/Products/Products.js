import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const [watch,setWatch]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/getProduct')
        .then(res=>res.json())
        .then(data=>setWatch(data))
    },[])

console.log(watch)
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container style={{marginBottom:'10px'}}>
          <div style={{marginTop:'-4%',color:'#E75480',fontWeight:'700'}}><h3>!! Select From Here To Buy !!</h3></div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              watch.slice(0,6).map(watches=><Product
                key={watches.id}
                watchAll={watches}
              ></Product>)
          }
      </Grid>
      <NavLink to='/explore'><h3>See More...</h3></NavLink>
      </Container>
    </Box>
    );
};

export default Products;