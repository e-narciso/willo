import React, { useState, useEffect } from "react";
import WispBox from "../wisp-comps/WispBox";
import AuthService from "../auth-comps/AuthService";
import UserBox from "../user-comps/UserBox";

const Dashboard = props => {
  const [wisps, setWisps] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getWisps();
    getUsers();
  }, []);

  const getWisps = async () => {
    const response = await new AuthService().getWisps();
    setWisps(response);
  };

  const getUsers = async () => {
    const response = await new AuthService().getUsers();
    setUsers(response);
  };

  const logOut = () => {
    // console.log(props);
    props.logOut(); //.then(res=>console.log(res, this))
    props.history.push("/");
  };

  // console.log(wisps);
  // console.log(props);

  return (
    <div className="App-header-2">
      {/* {populateWisps()} */}
      <h1>hello {props.user.username}</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Users</h2>
            <div className="container">
              {users.map((each, i) => {
                console.log(each);
                return (
                  <UserBox key={i} friend={each} loggedInUser={props.user} />
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <h2>Wisps</h2>
            {wisps.map((each, i) => (
              <WispBox
                key={i}
                displayName={each.creator.displayName}
                username={each.creator.username}
                content={each.content}
                image={each.creator.image}
              />
            ))}
          </div>
          <div className="col-4">Edit</div>
        </div>
      </div>
      <button onClick={logOut}>log out</button>
    </div>
  );
};

export default Dashboard;
