import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Register } from './Components/Register/Register';
import { ProfileComp } from './Components/Profile/Profile';
import { Timer } from './Components/Timer/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Register></Register>
      <ProfileComp/>
      <Timer seconds={Math.round(Math.random()*20)} fontSize={100} />
    </div>
  );
}

export default App;
