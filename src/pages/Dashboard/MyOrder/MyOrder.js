import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [number, setNumber] = useState(0)
    const [userOrder, setUserOrder] = useState([]);
    const {user}=useAuth();

    useEffect(() => {
        const url = 'https://dry-taiga-68945.herokuapp.com/allOrder'
        fetch(url)
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [number])

    const myOderData=userOrder.filter(myProduct=>myProduct.email === user.email);


    // console.log(userOrder);
    const deleteOrderhandler = (id) => {
        const yes = window.confirm('are you sure?');
        if (yes) {
            fetch(`https://dry-taiga-68945.herokuapp.com/allOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setNumber(number=>number+1)
                        alert('delete succecfully')
                    }
                })
        }

    }

    return (
        <div>
            <h1>All Order</h1>
            {
                myOderData.map(allOrder => <div
                    key={allOrder._id}
                >
                    <Grid container spacing={2}>

                        <Grid xs={12} md={6} lg={4}>
                            <Box sx={{ m: 2 }}>
                                <h6>Product Id : {allOrder._id}</h6>
                                <p>Customer Email : {allOrder.email}</p>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} lg={4}>
                            <Box sx={{ m: 2 }}>
                                <p>Phone Number : {allOrder.phone}</p>
                                <p>Address : {allOrder.address}</p>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} lg={4}>
                            <Box sx={{ m: 2 }}>
                                <Button onClick={() => deleteOrderhandler(allOrder._id)} sx={{ width: '70%' }}>Cancel Order</Button>
                            </Box>
                        </Grid>

                    </Grid>
                </div>

                )
            }
        </div>
    );
};

export default MyOrder;

