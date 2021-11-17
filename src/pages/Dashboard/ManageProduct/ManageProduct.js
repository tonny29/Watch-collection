import { Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css';



const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const url = `https://dry-taiga-68945.herokuapp.com/getProduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [number]);

    const deleteHandler = (id) => {
        const yes = window.confirm('are you sure?');
        if (yes) {
            fetch(`https://dry-taiga-68945.herokuapp.com/getProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setNumber(number => number + 1)
                        alert('delete succecfully')
                    }
                })
        }

    }


    return (
        <div>
            <h1>Manage All Product</h1>
            <hr />

            {
                product.map(allProduct => <div
                    key={allProduct._id}
                >
                    <Grid container spacing={2}>
                        <Grid xs={12} md={4} lg={2}>
                            <Box sx={{ m: 2 }}>
                                <img style={{ width: '100%' }} src={allProduct.image} alt="" />
                            </Box>
                        </Grid>
                        <Grid xs={12} md={8} lg={6}>
                            <div className="alingment">
                                <h5>{allProduct.name}</h5>
                                <p>{allProduct.price}</p>
                            </div>
                        </Grid>
                        <Grid xs={12} md={12} lg={4}>
                            <Box  className="alingment" sx={{ m: 2 }}>
                                <Button onClick={() => deleteHandler(allProduct._id)} sx={{ width: '70%', bgcolor: '#035', color: '#fff' }} className="order-btn">Delete</Button>
                            </Box>
                        </Grid>

                    </Grid>
                    <hr style={{ marginTop: '10px' }} />

                </div>

                )
            }
        </div>
    );
};


export default ManageProduct;