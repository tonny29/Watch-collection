import {  Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



const BuyWatch = () => {
    const [selectProduct,setSelectProduct]=useState([]);
    const [orderData,setOrderData]=useState();
    const {user}=useAuth();
    const id=useParams();
    console.log(id.id);
   
    useEffect(()=>{
        fetch('https://dry-taiga-68945.herokuapp.com/getProduct')
        .then(res=>res.json())
        .then(data=>setSelectProduct(data))
    },[])
// console.log(selectProduct);
const filterProduct=selectProduct.filter(product=>product._id === id.id)
// console.log(filterProduct);

    const onBlurhandeler=e=>{
        const field= e.target.name;
        const value=e.target.value;
        const newData={...orderData};
        newData[field]=value;
        setOrderData(newData); 
    }

    const submitInfo=e=>{
        e.preventDefault();
        submitHandler()
    }

    const submitHandler=()=>{
        const url='https://dry-taiga-68945.herokuapp.com/allOrder'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderData)
        })
        .then(res=>{
            alert('Order Succecfully Confirmed')
        });
        
 
    }
    console.log(orderData);

    return (
        <div>
            <Navigation></Navigation>
            {
                filterProduct.map(myOrder=><div
                    key={myOrder._id}
                >
                    <Box style={{marginTop:'40px'}}>
                        <Grid container spacing={2}>
                            <Grid  xs={12} md={6}>
                        <form onSubmit={submitInfo}>
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic" label="Your Email"
                        name="email"
                        defaultValue={user.email}
                        onBlur={onBlurhandeler}
                        variant="standard" />
                        <TextField 
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="Product name"
                        name="name"
                        defaultValue={myOrder.name}
                        onBlur={onBlurhandeler}
                        variant="standard" />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="product price"
                        name="Price"
                        defaultValue={myOrder.price}
                        onBlur={onBlurhandeler}
                        variant="standard"
                        />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="Your Address"
                        name="address"
                        onBlur={onBlurhandeler}
                        variant="standard"
                        />
                        <TextField
                        sx={{width:'75%',m:1}}
                        id="standard-basic"
                        label="phone number"
                        name="phone"
                        onBlur={onBlurhandeler}
                        variant="standard"
                        />
                        <Button onClick={()=>onBlurhandeler} sx={{width:'75%',m:1,backgroundColor:'#093150'}} type="submit" variant="contained">Submit To Add</Button>
                        {/* {isLoading && <CircularProgress/>}
                        {user?.email && <Alert severity="success">User Login Succecfully!!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>} */}
                    </form>
                            </Grid>
                            <Grid  xs={12} md={6}>
                                <img style={{width:'70%'}} src={myOrder.image} alt="" />
                            </Grid>
                        </Grid>
                    </Box>
                </div>)
            }
        </div>
    );
};

export default BuyWatch;

                        