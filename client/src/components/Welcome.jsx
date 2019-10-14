import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "./auth-comps/ButtonLink";
// import Login from "./auth-comps/Login";
// import Signup from "./auth-comps/Signup";
// import API from "../api";
// import UserBox from "./user-comps/UserBox";

const Welcome = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = async () => {
  //   const response = await API.get("users");
  //   setUsers(response.data);
  // };

  // console.log(users);

  return (
    <div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Willo</h2>
        <p>
          Welcome to Willo, a very tiny social network. <br />
          Put five thoughts out in the world, let them fade after a day. <br />
          See only what's on your friends' minds, without the noise. <br />
          Your messages disappear, every interaction is a fresh start. <br />
          You're an ember in the woods, a will-o'-the-wisp.
        </p>
        <ButtonLink
        link="login"
        destination="Log In" />
        <ButtonLink
        link="signup"
        destination="Sign Up" />
        {/* <Link to="/signup">
          <button>Sign Up</button>
        </Link> */}
        {/* <div className="userbox">
        {users.map((each, i) => (
          <UserBox
            key={i}
            image={each.image}
            displayName={each.displayName}
            username={each.username}
            bio={each.bio}
          />
        ))}
      </div> */}
      </header>
    </div>
  );
};

export default Welcome;
