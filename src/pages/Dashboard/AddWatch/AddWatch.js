import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddWatch.css';


const Addwatch = () => {
    const { user } = useAuth();
    // const addProduct=e=>{
    //     e.preventDefault();
    // }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.description;
        const price = data.price;
        const image = data.image

        fetch('http://localhost:7000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, description, price, image })
        })
            .then(res => res.json())
            .then(data => { console.log(data) ; e.target.reset() })
    }
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Add Watch</Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-tag">
                        <input name='name' {...register("name", { required: true })} placeholder="Product Name" />
                            <input name='description' {...register("description", { required: true })} placeholder="Description" />
                            <input name='price' {...register("price", { required: true })}placeholder="Price" />
                            <input name='image' {...register("image", { required: true })}placeholder="Image Link" />

                            {/* <input {...register("exampleRequired", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>} */}

                            <input type="submit" />
                        </div>
                        </form>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/I/81WNw2Y1pmL._AC_UX679_.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Addwatch;