import React, { Component } from "react";
import AuthService from "../auth-comps/AuthService";

class AddWisp extends Component {
  state = {
    content: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    // const userID = this.props.user._id;
    const content = this.state.content;
    // console.log(this.props)
    new AuthService()
      .makeWisp(content)
      .then(response => {
        //   console.log(this.state);
        // this.setState({ content: "" });
        // window.location.reload();
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>What are you thinking?</label>
        <br />
        <textarea
          type="text"
          name="content"
          value={this.state.content}
          onChange={e => this.handleChange(e)}
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default AddWisp;
