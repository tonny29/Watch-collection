import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box} from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Reviewers = () => {
    const [reviewer,setReviewer]=useState([]);
    useEffect(()=>{
        const url='https://dry-taiga-68945.herokuapp.com/review';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviewer(data))
    },[]);
    
    return (
        <div style={{ backgroundColor: '#4d9299' }}>
            <Box sx={{ m: 4 }} >
                <Typography variant='h4' sx={{ color: '#d2e1fc', display: 'flex', p: 2 }}>
                    What Says Our Customers ...
                </Typography>
                <Stack direction="row" spacing={2}
                    style={{
                        overflow: 'scroll', width: '100%', overflowY: 'hidden',
                    }}>
                    {
                        reviewer.map(review => <Item
                            key={review._id}
                            style={{
                                minWidth: '280PX',
                                backgroundColor: '#d2e1fc',
                                margin: '20px',
                                color:'#000'
                            }}
                        >
                            <Typography component="legend"><AccountCircleIcon>
                                
                                </AccountCircleIcon>{' '}Customer syas</Typography>
                            <hr />
                            
                            <p style={{
                                fontSize: '20px',
                            }}>
                                {review.email}</p>
                            <p>{review.description}</p>
                            <div
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}

                            >
                                <Rating name="read-only" value={review.rating}readOnly />
                               
                            </div>
                        </Item>)
                    }

                </Stack>
            </Box>
        </div>

    );
};

export default Reviewers;