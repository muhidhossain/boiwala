import React from 'react';
import './SignUp.css';
import Auth from '../Login/use-auth';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo/logo1.png';
import FullHeight from "react-full-height";

const SignUp = () => {
    const auth = Auth();
    const { register, handleSubmit, watch, errors, reset } = useForm();

    const onSubmit = () => {
        auth.createAccount();
        reset();
    }

    return (
        <FullHeight className="signUp">
            <div className="signUpDetails">
                <img src={logo} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" placeholder="Full Name" onChange={auth.handleChange} ref={register({ required: true })} />
                    <br />
                    {errors.name && <small>Full Name is required</small>}
                    <br />
                    <input type="text" name="email" placeholder="Email" onChange={auth.handleChange} ref={register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })} />
                    <br />
                    {errors.email && <small>Enter a valid email</small>}
                    <br />
                    <input type="password" name="password" placeholder="New Password" onChange={auth.handleChange} ref={register({ required: true, minLength: 8, pattern: /\d/ })} />
                    <br />
                    {errors.password && <small>Enter a valid password with at least 8 character and a number</small>}
                    <br />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={auth.handleChange} ref={register({ required: true, validate: (value) => value === watch("password") })} />
                    <br />
                    {errors.confirmPassword && <small>Password didn't match.</small>}
                    <br />
                    <Button type="submit" className="signUpBtn" >Creat Account</Button>
                </form>
            </div>
        </FullHeight>
    );
};

export default SignUp;