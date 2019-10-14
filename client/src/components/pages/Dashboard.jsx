import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        wisps: {}
    }

    getWisps = async () => {
        await axios.get("http://localhost:5000/dashboard")
        .then(allTheWisps => {
            this.setState({
                wisps: allTheWisps
            })
        })
    }

    // if (user.following.length == 0){
    //     return(
    //         <div>
    //             Follow some users!
    //             <button>
    //             <Link to="/users">User List</Link>
    //             </button>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>

    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Dashboard;