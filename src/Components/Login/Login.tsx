import React, { useState} from 'react';
import './logincss.css';
import { Button } from 'reactstrap';

export default function Login() {

  const [enteredUsername, setUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const LoginHandler = async () => {
    console.log(enteredUsername);
  }

  return (
    <div className="Login">
        <div className="form-signin">
          <input className="form-control" type="password" id="password" placeholder="Password" 
          onChange={e => setPassword(e.target.value)} />
          <input className="form-control" id="username" placeholder="Username" 
          onChange={e => setUsername(e.target.value)} />
          <div className="btndiv">
          <Button className="btn btn-lg btn-primary btn-block btnanim" onClick={LoginHandler}>Login</Button>
          </div>
        </div>
    </div>
  );
}
