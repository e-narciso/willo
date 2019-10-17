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
import { Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      err: {}
    };
    this.service = new AuthService();
  }

  setUser = user => {
    console.log(user, "90909090909????");
    this.setState({ user });
  };

  logOut = () => {
    this.service
      .logout()
      .then(res => {
        this.setState({ user: {} });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  render() {
    if (!this.state.user.username) {
      console.log(this.state);
      return (
        <div className="App">
          <PreLogin setUser={this.setUser} />
        </div>
      );
    } else {
      console.log(this.state);
      return (
        <div className="App">
          <Dashboard user={this.state.user} logOut={this.logOut} />
          {/* <p>This is Home</p> */}
        </div>
      );
    }
  }
}

export default App;
