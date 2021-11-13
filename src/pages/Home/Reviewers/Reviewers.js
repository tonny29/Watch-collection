import { Grid } from '@mui/material';
import React from 'react';

const Reviewers = () => {
    return (
        <Grid container spacing={2} sx={{border:'1px solid darkblue',margin:'20px',width:'90%'}}>
        <Grid item xs={3}>
            <p>one reviwer</p>
        </Grid>
        <Grid item xs={3}>
            <p>one reviwer</p>
        </Grid>
        <Grid item xs={3}>
            <p>one reviwer</p>
        </Grid>
        <Grid item xs={3}>
            <p>one reviwer</p>
        </Grid>
      </Grid>
    );
};

export default Reviewers;