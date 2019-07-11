import React from "react";
import ReactDOM from "react-dom";
import A from "./App";

function B(props) {
    return (
        <div className="App">
            <p>Hello, my name is {props.namej}</p>
        </div>
    );
}

ReactDOM.render(<A />, document.getElementById("root"));
