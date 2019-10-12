import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth-comps/Login";
import Signup from "./components/auth-comps/Signup";
import AuthService from "./components/auth-comps/AuthService";

class App extends Component {
  state = {
    loggedInUser: null
  };

  service = new AuthService();
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
