import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        this.props.getUser(response);
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <header className="App-header">
        <h2>Willo</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>&nbsp;&nbsp;
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br/>
          <label>Password:</label>&nbsp;&nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
            <br/>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have account?&nbsp;
          <Link to={"/signup"}>Signup</Link>
        </p>
      </header>
    );
  }
}

export default Login;
