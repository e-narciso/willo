import React, { Component } from "react";
import AuthService from "../auth-comps/AuthService";

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
  handleFormSubmit = e => {
    const image = this.state.image;
    const bio = this.state.bio;
    const displayName = this.state.displayName;
    e.preventDefault();
    // const args = this.state;
    this.service
      .edit({ image, bio, displayName })
      .then(response => {
        console.log(response, this)
        this.setState({
          bio: this.state.bio,
          image: this.state.image,
          displayName: this.state.displayName
        });
        this.props.setUser(response)
        window.location.reload();
        // res.json(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    this.service
      .handleUpload(uploadData)
      .then(response => {
        console.log(response)
        this.setState({ image: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <img
            className="img-fluid"
            src={this.state.image}
            alt=""
          />
          <label>Display Name</label>
          <input type="text" name="displayName" onChange={this.handleChange} />
          <label>Profile image</label>
          <input type="file" onChange={e => this.handleFileUpload(e)} name="image" />
          <label>Bio</label>
          <textarea name="bio" onChange={this.handleChange}></textarea>
          <input
            type="submit"
            value="Submit"
            
            // onSubmit={e => this.handleFormSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

export default Profile;
