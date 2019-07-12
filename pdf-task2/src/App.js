import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.getName}/>
            </div>
        );
    }
}

export default App;
