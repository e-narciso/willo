import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = props => {
  return (
    <Link to={`/${props.link}`}>
      <button>{props.destination}</button>
    </Link>
  );
};

export default ButtonLink;
