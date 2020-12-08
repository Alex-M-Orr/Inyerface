import React from 'react';
import './logincss.css';
import { Button } from 'reactstrap';

export default function Login() {
  return (
    <div className="Login">
        <div className="form-signin">
          <input className="form-control" type="password" id="password" placeholder="Password" />
          <input className="form-control" id="username" placeholder="Username"  />
          <div className="btndiv">
          <Button className="btn btn-lg btn-primary btn-block btnanim" color="danger">Login</Button>
          </div>
        </div>
    </div>
  );
}
