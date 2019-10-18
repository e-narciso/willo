import React from "react";
import style from "./userbox.module.css";
import AuthService from "../auth-comps/AuthService";

const UserBox = props => {
  console.log(props)
  if(!props.loggedInUser){ return }
  const style = {
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
    // width: "80%",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2vh"
  };

  const pStyle = {
    fontSize: "14px"
  };

  const buttonStyle = {
    fontSize: "14px"
  };

  const addFriend = e => {
    let userID = props.loggedInUser._id;
    let friendID = props.friend._id;
    new AuthService()
      .follow(userID, friendID)
      .then(response => {
        window.location.reload();
        // console.log(props);
        props.getUsers();
        //window.p = props
        //props.history.push("/dashboard")
      })
      .catch(err => console.log(err));
  };

  const removeFriend = e => {
    let userID = props.loggedInUser._id;
    let friendID = props.friend._id;
    new AuthService()
      .unfollow(userID, friendID)
      .then(response => {
        // props.history.push("/dashboard")
        window.location.reload();
        props.getUsers();
      })
      .catch(err => console.log(err));
  };

  const handleButton = () => {
    if (props.loggedInUser._id === props.friend._id) {
      return;
    }
    if (props.loggedInUser.following.includes(props.friend._id)) {
    // if (props) {
      return (
        <button style={buttonStyle} onClick={() => removeFriend()}>
          Unfollow
        </button>
      );
    } else {
      return (
        <button style={buttonStyle} onClick={() => addFriend()}>
          Follow
        </button>
      );
    }
  };

  return (
    <div className="row" style={style}>
      <div className="col-2">
        <img alt="" src={props.friend.image} className="img-fluid"></img>
      </div>
      <div className="col-6">
        <h4 className="name">{props.friend.displayName}</h4>
        <h5 className="username">@{props.friend.username}</h5>
        <p style={pStyle}>{props.friend.bio}</p>
      </div>
      <div className="col-4">{handleButton()}</div>
    </div>
  );
};

export default UserBox;
