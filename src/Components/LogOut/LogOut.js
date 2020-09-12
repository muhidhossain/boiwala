import React from 'react';
import './LogOut.css';
import { Button } from '@material-ui/core';
import Auth from '../Login/use-auth';

const LogOut = () => {
    const auth = Auth();

    const handleClick = async () => {
        await auth.signOut();
        window.location.reload();
    }


    return (
        <div>
            <Button style={{ border: "2px solid #498EC5", color: "#498EC5" }} onClick={handleClick}>Log Out</Button>
        </div>
    );
};

export default LogOut;