import React from "react";
import style from "./userbox.module.css";
import AuthService from "../auth-comps/AuthService";

const UserBox = props => {
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
  }

  const addFriend = e => {
    let userID = props.loggedInUser._id;
    let friendID = props.friend._id;
    new AuthService()
      .follow(userID, friendID)
      .then(response => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const removeFriend = e => {
    let userID = props.loggedInUser._id;
    let friendID = props.friend._id;
    new AuthService()
      .unfollow(userID, friendID)
      .then(response => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleButton = () => {
    if (props.loggedInUser._id === props.friend._id) {
      return;
    }
    if (props.loggedInUser.following.includes(props.friend._id)) {
      return <button style={buttonStyle} onClick={() => removeFriend()}>Unfollow</button>;
    } else {
      return <button style={buttonStyle} onClick={() => addFriend()}>Follow</button>;
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
  // return (
  //   <div style={style}>
  //     <div className="wrapper">
  //       <div className="profileImage">
  //         <div className="image image-fluid">
  //           <img src={props.image} alt=""></img>
  //         </div>
  //       </div>
  //       <div className="profileInfo">
  //         <div className="info">
  //           <h3 className="name">{props.displayName}</h3>
  //           <h5 className="username">@{props.username}</h5>
  //           <p>{props.bio}</p>
  //         </div>
  //         {/* <div className="follow">
  //           <button onClick={() => props.followToggle()}>Follow</button>
  //         </div> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default UserBox;
