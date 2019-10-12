import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ButtonLink from "./auth-comps/ButtonLink";
// import Login from "./auth-comps/Login";
// import Signup from "./auth-comps/Signup";

class Welcome extends Component {
    
  render() {
    return (
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
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </header>
    );
  }
}

export default Welcome;
