import React from "react";
import logo from "./logo.svg";
import { Register } from "./Components/Register/Register";
import { Timer } from "./Components/Timer/Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProfilePage } from "./Views/ProfilePage/ProfilePage";
import { LoginPage } from "./Views/LoginPage/LoginPage";
import { store } from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/profile" component={ProfilePage}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
