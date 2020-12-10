import React from 'react';
import Login from '../../Components/Login/Login';
import { Popup } from '../../Components/Popup/Popup';
import { Register } from '../../Components/Register/Register';
import { AssistantBox } from '../../Components/AssistantBox/AssistantBox';
import SpinnerEx  from '../../Components/Spinner/spinner';

export const LoginPage: React.FC<any> = (props:any) => {
    return (
        <>
            <Popup/>
            <Login/>
            <SpinnerEx/>
            <Register/>
            <AssistantBox/>
        </>
    );
}