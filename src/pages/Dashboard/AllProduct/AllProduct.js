import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import './Explore.css';
import AllProducts from '../AllProducts/AllProducts';
import Navigation from '../../Shared/Navigation/Navigation';



const AllProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/getProduct')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product)
    return (
        <div className="select-color">
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container style={{ marginBottom: '10px', marginTop: '10px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            product.map(manageProduct => <AllProducts
                                key={manageProduct.id}
                                manageProduct={manageProduct}
                            ></AllProducts>)
                        }

                    </Grid>

                </Container>
            </Box>
        </div>
    );
};

export default AllProduct;