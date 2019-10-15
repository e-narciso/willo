import React, { useState, useEffect } from "react";
import WispBox from "../wisp-comps/WispBox";
import AuthService from "../auth-comps/AuthService";

const Dashboard = () => {
  const [wisps, setWisps] = useState([]);

  useEffect(() => {
    getWisps();
  }, []);

  const getWisps = async () => {
    const response = await new AuthService().getWisps();
    setWisps(response);
  };

  console.log(wisps);

  return (
    <div className="App-header-2">
      {/* {populateWisps()} */}
      <h1>hello</h1>
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
    </div>
  );
};

export default Dashboard;
