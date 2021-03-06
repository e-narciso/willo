// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import WispBox from "../wisp-comps/WispBox";
import AuthService from "../auth-comps/AuthService";
import UserBox from "../user-comps/UserBox";
import AddWisp from "../wisp-comps/AddWisp";
import Profile from "../pages/Profile";
class Dashboard extends Component {
  state = {
    users: [],
    wisps: [],
    logout: false
  };

  componentDidMount() {
    this.getUsers();
    this.getWisps();
  }
  getWisps = () => {
    new AuthService()
      .getWisps()
      .then(theWisps => {
        this.setState({
          wisps: theWisps
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  getUsers = () => {
    new AuthService()
      .getUsers()
      .then(theUsers => {
        this.setState({
          users: theUsers
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  logOut = () => {
    this.props.logOut();
    this.setState({
      logout:true
    })
    // this.props.history.push("/");
  };
  render() {
    console.log(this.props.history)
    if(this.state.logout){
      return <Redirect to='/'/>
    }
    return (
      <div className="App-header-2">
        <h1>hello {this.props.user.username}</h1>
        <button onClick={this.logOut}>log out</button>
        <AddWisp user={this.props.user} />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h2>Users</h2>
              <div className="container">
                {this.state.users.map((each, i) => (
                  <UserBox
                    key={i}
                    friend={each}
                    loggedInUser={this.props.user}
                    {...this.props}
                    getUsers={this.getUsers}
                    // forceUpdate={() => getUsers()}
                  />
                ))}
              </div>
            </div>
            <div className="col-6">
              <h2>Wisps</h2>

              {this.state.wisps.map((each, i) => (
                <WispBox
                  key={i}
                  displayName={each.creator.displayName}
                  username={each.creator.username}
                  content={each.content}
                  image={each.creator.image}
                />
              ))}
            </div>
            <div className="col-2">
              <h2>Edit</h2>
              <Profile loggedInUser={this.props.user} setUser={this.props.setUser}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Dashboard;

// const Dashboard = props => {
//   const [wisps, setWisps] = useState([]);
//   const [users, setUsers] = useState([]);
//   //const [, forceUpdate] = useState(0);

//   useEffect(() => {
//     getWisps();
//     getUsers();
//   }, []);

//   const getWisps = async () => {
//     const response = await new AuthService().getWisps();
//     console.log(response);
//     setWisps(response);
//   };

//   const getUsers = async () => {
//     console.log('[][][][][]')
//     const response = await new AuthService().getUsers();
//     console.log(response)
//     setUsers(...response, count+1);
//   };

//   const logOut = () => {
//     // console.log(props);
//     props.logOut(); //.then(res=>console.log(res, this))
//     props.history.push("/");
//   };

//   console.log(wisps);
//   // console.log(props);

//   return (
//     <div className="App-header-2">
//       {/* {populateWisps()} */}
//       <h1>hello {props.user.username}</h1>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <div className="container">
//         <div className="row">
//           <div className="col-4">
//             <h2>Users</h2>
//             <div className="container">
//               {users.map((each, i) => {
//                 return (
//                   <UserBox key={i} friend={each} loggedInUser={props.user} {...props} forceUpdate={() =>getUsers()} />
//                 );
//               })}
//             </div>
//           </div>
//           <div className="col-4">
//             <h2>Wisps</h2>
//             {wisps.map((each, i) => (
//               <WispBox
//                 key={i}
//                 displayName={each.creator.displayName}
//                 username={each.creator.username}
//                 content={each.content}
//                 image={each.creator.image}
//               />
//             ))}
//           </div>
//           <div className="col-4">Edit</div>
//         </div>
//       </div>
//       <AddWisp user={props.user} />
//       <button onClick={logOut}>log out</button>
//     </div>
//   );
// };

// export default Dashboard;
