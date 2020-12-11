import React from 'react';
import './settingscss.css';
import { Button } from 'reactstrap';

export const SettingsPage: React.FC<any> = (props:any) => {
    return (
        <>
        <div>
        <div className="es-wrap x">
        <div className="trans y">
            <div className="form-set">
                <h1>Settings</h1>
                <input className="form-control" id="username" placeholder="New Password"  />
                <Button className="btn btn-sm btn-primary btnanim">Change Password</Button>
                <input className="form-control" id="username" placeholder="New Email"  />
                <Button className="btn btn-sm btn-primary btnanim">Change Email</Button>
            </div>
        </div>
        </div>
         </div>
        </>
    );
}