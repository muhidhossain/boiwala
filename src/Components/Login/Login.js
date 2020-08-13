import React from 'react';
import './Login.css';
import Auth from './use-auth'
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import logo from '../../images/logo/logo1.png';
import googleLogo from '../../images/logo/google_logo.png'
import FullHeight from "react-full-height";
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = Auth();
    const { register, handleSubmit, errors, reset } = useForm();

    console.log(auth.user);

    const onSubmit = () => {
        auth.signInUser();
        reset();
    }

    return (
        <FullHeight className="login">
            <div className="loginDetails">
                <img src={logo} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="email" placeholder="Your Email" onChange={auth.handleChange} ref={register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })} />
                    <br />
                    {errors.email && <small>Enter a valid email.</small>}
                    <br />
                    <input type="password" name="password" placeholder="Your Password" onChange={auth.handleChange} ref={register({ required: true, minLength: 8, pattern: /\d/ })} />
                    <br />
                    {errors.password && <small>Enter a valid password with at least 8 character and a number</small>}
                    <br />
                    <Button className="loginBtn" type="submit">Log In</Button>
                </form>
                <br />
                <Button className="loginBtn" onClick={auth.signInWithGoogle}>
                    <span>Login With Google</span>
                    <img src={googleLogo} alt="" />
                </Button>
                <br />
                <br />
                <Link to="/signUp" style={{ textDecoration: "none" }}>
                    <Button className="loginBtn">Create Account</Button>
                </Link>
            </div>
        </FullHeight>
    );
};

export default Login;