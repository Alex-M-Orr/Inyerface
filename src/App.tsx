import React from 'react';
import logo from './logo.svg';
import { Register } from './Components/Register/Register';
import { ProfileComp } from './Components/Profile/Profile';
import { Timer } from './Components/Timer/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <ProfileComp/>
      {/* <Register /> */}
      
    </div>
  );
}

export default App;
