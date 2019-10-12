import React from 'react';
import {Link} from "react-router-dom";

const ButtonLink = () => {
    return (
        <button>
          <Link to={`/${this.props.link}`}>{this.props.destination}</Link>
        </button>
    );
};

export default ButtonLink;