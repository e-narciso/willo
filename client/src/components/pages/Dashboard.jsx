import React, { useState, useEffect } from "react";
import WispBox from "../wisp-comps/WispBox";
import AuthService from "../auth-comps/AuthService";

const Dashboard = props => {
  const [wisps, setWisps] = useState([]);

  useEffect(() => {
    getWisps();
  }, []);

  const getWisps = async () => {
    const response = await new AuthService().getWisps();
    setWisps(response);
  };

  const logOut = () => {
    console.log(props)
    props.logOut()//.then(res=>console.log(res, this))
    props.history.push('/')
  }

  // console.log(wisps);
  console.log(props);

  return (
    <div className="App-header-2">
      {/* {populateWisps()} */}
      <h1>hello {props.user.username}</h1>
      <div>
        {wisps.map((each, i) =>( 
           <WispBox
            key={i}
            displayName={each.creator.displayName}
            username={each.creator.username}
            content={each.content}
            image={each.creator.image}
          />
        ))}
      </div>
      <button onClick={logOut}>log out</button>
    </div>
  );
};

export default Dashboard;
