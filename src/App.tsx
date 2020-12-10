import React from "react";
import logo from "./logo.svg";
import { Register } from "./Components/Register/Register";
import { Timer } from "./Components/Timer/Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProfilePage } from "./Views/ProfilePage/ProfilePage";
import { LoginPage } from "./Views/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { rootReducers } from './reducers/Index'

const store = createStore(rootReducers, +  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/profile" component={ProfilePage}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
