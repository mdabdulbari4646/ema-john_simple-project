import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => console.log(data);
    console.log(watch("example")); 
  
    return (
 
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
     
        <input {...register("name",  { required: true })} defaultValue={loggedInUser.name} placeholder='Enter Your Name' />
        {errors.name && <span className='error'>Name is required</span>}

        <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder='Enter Your Email'/>
        {errors.email && <span className='error'>Email is required</span>}

        <input {...register("address", { required: true })} placeholder='Enter Your Address'/>
        {errors.address && <span className='error'>Address is required</span>}

        <input {...register("phone", { required: true })} placeholder='Enter Your Phone No'/>
        {errors.phone && <span className='error'>Phone number is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;