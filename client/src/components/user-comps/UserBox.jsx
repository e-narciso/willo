import React from "react";
import style from "./userbox.module.css"

const UserBox = props => {
  return (
    <div style={style}>
      <div className="wrapper">
        <div className="profileImage">
          <div className="image">
            <img src={props.image} alt=""></img>
          </div>
        </div>
        <div className="profileInfo">
          <div className="info">
            <h3 className="name">{props.displayName}</h3>
            <h5 className="username">@{props.username}</h5>
            <p>{props.bio}</p>
          </div>
          {/* <div className="follow">
            <button onClick={() => props.followToggle()}>Follow</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserBox;
