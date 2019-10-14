import React, { Component } from "react";
import Welcome from "./components/Welcome";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth-comps/Login";
import Signup from "./components/auth-comps/Signup";
import AuthService from "./components/auth-comps/AuthService";

class PreLogin extends Component {
  state = {
    loggedInUser: null
  };

  service = new AuthService();
  render() {
    return (
      <div className="nuisance">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default PreLogin;
