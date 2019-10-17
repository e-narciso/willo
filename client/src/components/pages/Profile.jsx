import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.loggedInUser.bio,
      image: this.props.loggedInUser.image,
      displayName: this.props.loggedInUser.displayName
    };
    this.service = new AuthService();
  }
  handleFormSubmit = (e) => {
    const image = this.state.image;
    const bio = this.state.bio;
    const displayName = this.state.displayName;
    e.preventDefault();
  }

  render() {
    return <div></div>;
  }
}

export default Profile;
