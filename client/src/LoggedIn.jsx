import React, { Component } from 'react';
import {Route} from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"

class LoggedIn extends Component {
    render() {
        return (
            <div>
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
        );
    }
}

export default LoggedIn;