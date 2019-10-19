import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import ButtonLink from "./auth-comps/ButtonLink";
import AuthService from "./auth-comps/AuthService";

const Welcome = props => {
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
      <header className="App-header">
        <Link to="/">
          <h2>Willo</h2> 
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
      </header>
    </div>
  );
};

export default Welcome;
