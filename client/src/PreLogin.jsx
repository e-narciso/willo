import React, { Component } from "react";
import Welcome from "./components/Welcome";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/auth-comps/Login";
import Signup from "./components/auth-comps/Signup";
import AuthService from "./components/auth-comps/AuthService";
// import Dashboard from "./components/pages/Dashboard";

class PreLogin extends Component {
  state = {
    user: {},
    err: {}
  };

  // componentDidMount() {
  //   new AuthService()
  //     .getUser()
  //     .then(user => {
  //       this.setUser(user);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       this.setState({ err });
  //     });
  // }

  setUser = user => {
    console.log(user, "90909090909????");
    this.props.setUser(user);
  };

  // logOut = () => {
  //   this.props.logOut();
  // };

  // service = new AuthService();
  render() {
    // if (!this.state.user) {
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
          </Switch>
        </div>
      );
  //   } else {
      
  //     return (
  //       <Switch>
  //         <Route exact path="/dashboard" component={Dashboard} />
  //         {/* <Route exact path="/edit-profile" component={Profile} />
  //         <Route exact path="/find-users" component={Users} /> */}
  //       </Switch>
  //     );
  //   }
  }
}

export default PreLogin;
