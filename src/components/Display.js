import React from "react";
import './display.css';
function Display(props){
    const {data}=props;

    return(
        <div>
            <h5>{data.id}</h5>
            <h5>{data.name}</h5>
            <h5>{data.email}</h5>
            <button id="button1">Close</button>
        </div>
    );
};
export default Display;