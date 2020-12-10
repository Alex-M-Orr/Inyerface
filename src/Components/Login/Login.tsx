import React, { useState} from 'react';
import './logincss.css';
import { Button } from 'reactstrap';
import { useSelector, useStore } from 'react-redux';
import { IUserState } from '../../reducers/UserReducer';
import { useHistory } from "react-router-dom";

export const Login: React.FC<any> = (props:any) => {

  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const history = useHistory();

  let email = useSelector((state: any) => {
    return `${state.UserReducer?.email}`
  });
  
  let password = useSelector((state: any) => {
    return `${state.UserReducer?.password}`
  });

  const LoginHandler = async () => {
    if(enteredEmail === email && enteredPassword === password && email !== ''){
        history.push("/profile");
    }
    else if(enteredEmail == "test" && enteredPassword == "test"){
      history.push("/profile");
    }

    console.log(password);
    console.log(email);
  }

  const annoyingAlert = () => {
    window.alert("GREAT JOB CLICKING!");
  }

  return (
    <div className="Login">
        <div className="form-signin">
          <input className="form-control" type="password" id="password" placeholder="Password" 
          onChange={e => setPassword(e.target.value)} onClick={annoyingAlert} />
          <input className="form-control" id="username" placeholder="Username" onClick={annoyingAlert}
          onChange={e => setEmail(e.target.value)} />
          <div className="btndiv">
          <Button className="btn btn-lg btn-primary btn-block btnanim" onClick={LoginHandler}>Login</Button>
          </div>
        </div>
    </div>
  );
}

export default Login;