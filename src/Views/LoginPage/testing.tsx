import React from 'react';
import { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Login from '../../Components/Login/Login';
import { Popup } from '../../Components/Popup/Popup';
import { Register } from '../../Components/Register/Register';

export const Testing: React.FC<any> = (props:any) => {
    const  [isPopped, setPopped] = useState(true);

    return (
        <>
            <Popup/>
            <Login/>
            <Register/>
        </>
    );
}