import React from 'react';
import ToggleFollow from "../user-comps/ToggleFollow";

const WispBox = props => {
    const style = {
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
        width: "80%",
        textAlign: "left",
        lineHeight: "0.2vh",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2vh",
    }
    return (
        <div className="row" style={style}>
            <div className="col-2">
                <img alt="" src={props.image} className="img-fluid"></img>
            </div>
            <div className="col-10">
                <h5>{props.displayName}</h5>
                <h6>@{props.username}</h6>
                <h5>{props.content}</h5>
            </div>
        </div>
    );
};

export default WispBox;