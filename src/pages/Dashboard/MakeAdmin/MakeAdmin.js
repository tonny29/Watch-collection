import React from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const MakeAdmin = () => {
    const {admin}=useAuth();
    console.log('this is admin',admin);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = 'https://dry-taiga-68945.herokuapp.com/user/admin'
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/JSON'
             },
             body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            alert('this person is successfully added as admin')
            reset()
        })
  
    }
   
    return (
       
            <div>
            <h1>Make an Admin</h1>
             <form onSubmit={handleSubmit(onSubmit)}>

            <Box className="input-field">  
            <input className="reg-filed" {...register("email")} placeholder="new admin email" type='email' required/>   
            <input className="reg-btn" type="submit" value="add admin" />
            </Box>
            </form>
        </div>
    );
};

export default MakeAdmin;