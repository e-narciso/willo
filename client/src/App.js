import React, { Component } from "react";
import "./App.scss";
// import Welcome from "./components/Welcome";
// import { Switch, Route } from "react-router-dom";
// import Login from "./components/auth-comps/Login";
// import Signup from "./components/auth-comps/Signup";
// import AuthService from "./components/auth-comps/AuthService";
import PreLogin from "./PreLogin";

class App extends Component {
  // state = {
  //   loggedInUser: null
  // };

  // service = new AuthService();
  render() {
    return (
      <div className="App">
        <PreLogin />
      </div>
    );
  }
}

export default App;
