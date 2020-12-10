import React from 'react';
import Login from '../../Components/Login/Login';
import { Register } from '../../Components/Register/Register';

export const LoginPage: React.FC<any> = (props:any) => {
    return (
        <>
            <Login/>
            <Register/>
        </>
    );
}