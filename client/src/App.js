import React, { Component } from "react";
import "./App.scss";
import AuthService from "./components/auth-comps/AuthService";
// import Welcome from "./components/Welcome";
// import { Switch, Route } from "react-router-dom";
// import Login from "./components/auth-comps/Login";
// import Signup from "./components/auth-comps/Signup";
// import AuthService from "./components/auth-comps/AuthService";
import PreLogin from "./PreLogin";
import LoggedIn from "./LoggedIn";

class App extends Component {
  state = {
    user: {},
    err: {}
  };

  setUser = user => {
    console.log(user, "90909090909????");
    this.setState({ user });
  };

  logOut = () => {
    new AuthService()
      .logout()
      .then(res => {
        this.setState({ user: {} });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  // service = new AuthService();
  render() {
    if (!this.state.user.username) {
      console.log(this.state)
      return (
        <div className="App">
          <LoggedIn />
          <PreLogin setUser={this.setUser} logOut={this.logOut} />
        </div>
      );
    } else {
      console.log(this.state)
      return (
        <div className="App">
          <LoggedIn />
        </div>
      );
    }
  }
}

export default App;
