import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import ExploreAll from '../ExploreAll/ExploreAll';
import Footer from '../../Shared/Footer/Footer';
import './Explore.css';



const Explore = () => {
    const [explore,setExplore]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/getProduct')
        .then(res=>res.json())
        .then(data=>setExplore(data))
    },[])
    // console.log(explore)
    return (
        <div className="select-color">
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
      <Container style={{marginBottom:'10px',marginTop:'10px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                explore.map(exploreProduct=><ExploreAll
                key={exploreProduct.id}
                allWatch={exploreProduct}
                ></ExploreAll>)
            }
            
        </Grid>
        
      </Container>
      </Box>
      <Footer></Footer>
        </div>
    );
};

export default Explore;