import React from "react";

function B(props) {
    console.log("render B");
    return (
        <div className="App">
            <p>Hello, my name is {props.name}</p>
        </div>
    );
}

export default B;