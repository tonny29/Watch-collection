import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imgOne from '../../../images/one.jfif';
import imgTwo from '../../../images/three.jfif';
import imgThree from '../../../images/two.jpg';
import imgFour from '../../../images/four.jpg';



const NewWatch = () => {
    return (
        <Box>
            <div style={{color:'darkblue',fontWeight:'700',marginTop:'10px',padding:'5px'}}>
            <h3>!! NEW ARRIVELS WATCH NOW !!</h3>
            </div>
            <Grid container spacing={0}>
            <Grid item xs={6} md={6} lg={3}>
                <img style={{width:'90%',margin:'10px',border:'2px solid darkblue',borderRadius:'10px'}} src={imgOne} alt="" />
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <img style={{width:'90%',margin:'10px',height:'64%',border:'2px solid darkblue',borderRadius:'10px'}} src={imgTwo} alt="" />
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <img style={{width:'90%',margin:'10px',border:'2px solid darkblue',borderRadius:'10px'}} src={imgThree} alt="" />
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <img style={{width:'90%',margin:'10px',border:'2px solid darkblue',borderRadius:'10px'}} src={imgFour} alt="" />
            </Grid>
        </Grid>
        </Box>
    );
};

export default NewWatch;

