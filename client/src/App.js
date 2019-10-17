import React, { Component } from "react";
import "./App.scss";
import AuthService from "./components/auth-comps/AuthService";
import Welcome from "./components/Welcome";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth-comps/Login";
import Signup from "./components/auth-comps/Signup";
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

  componentDidMount() {
    new AuthService()
      .getUser()
      .then(user => {
        this.setUser(user);
      })
      .catch(err => {
        console.error(err);
        this.setState({ err });
      });
  }

  forceUpdate = () => {
    this.setState()
  }

  setUser = user => {
    console.log(user, "-=-=-=-=909????");
    this.setState({ user });
  };

  logOut = () => {
    this.service
      .logout()
      .then(res => {
        this.setState({ user: {} });
        return res;
        //console.log(this);
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  render() {
    // console.log(this)
    // if (!this.state.user.username) {
    //   console.log(this.state);
    //   return (
    //     <div className="App">
    //       {/* <PreLogin setUser={this.setUser} /> */}
    //       <Redirect to="/" />
    //     </div>
    //   );
    // } else {
    //   console.log(this.state);
    //   return (
    //     <div className="App">
    //       <Redirect to="/dashboard" />

    //       {/* <Dashboard user={this.state.user} logOut={this.logOut} {...this.props} /> */}
    //       {/* <p>This is Home</p> */}
    //     </div>
    //   );
    // }
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
          <Route
            exact
            path="/"
            render={props => (
              <Welcome
                {...props}
                user={this.state.user}
                setUser={this.setUser}
                // logOut={this.logOut}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/dashboard"
            render={props => (
              <Dashboard
                {...props}
                user={this.state.user}
                logOut={this.logOut}
                forceUpdate={this.forceUpdate}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
