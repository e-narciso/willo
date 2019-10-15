import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import ButtonLink from "./auth-comps/ButtonLink";
// import Login from "./auth-comps/Login";
// import Signup from "./auth-comps/Signup";
// import API from "../api";
// import UserBox from "./user-comps/UserBox";
// import WispBox from "./wisp-comps/WispBox";
import AuthService from "./auth-comps/AuthService";

const Welcome = props => {
  if(props.user.username){
    // return props.history.push('/dashboard')
    //return <Redirect to="/"/>
  }
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
        <Link to="/">
          <h2>Willo {props.user.username}</h2> 
        </Link>
        <p>
          Welcome to Willo, a very tiny social network. <br />
          Put five thoughts out in the world, let them fade after a day. <br />
          See only what's on your friends' minds, without the noise. <br />
          Your messages disappear, every interaction is a fresh start. <br />
          You're an ember in the woods, a will-o'-the-wisp.
        </p>
        <ButtonLink link="login" destination="Log In" />
        <ButtonLink link="signup" destination="Sign Up" />
        <button onClick={props.logOut}>log out</button>
        {/* <WispBox 
          image="http://3.bp.blogspot.com/-GEpcgrulbYY/VVkljtmQlMI/AAAAAAAAAig/Nietx4sz2tI/s1600/Willow_the_wispBArrowsuch5.png"
          username="username"
          displayName = "Display Name"
          content = "this is what a wisp looks like"
        /> */}
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
