import React from 'react';
import './LogOut.css';
import { Button } from '@material-ui/core';
import Auth from '../Login/use-auth';

const LogOut = () => {
    const auth = Auth();

    return (
        <div>
            <Button onClick={auth.signOut}>Log Out</Button>
        </div>
    );
};

export default LogOut;