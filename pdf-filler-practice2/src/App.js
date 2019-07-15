import React from "react";
import "./App.css";
import themes from "./components/themes";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import Context from "./components/context";
import Select from "./components/Select";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "black"
        };
    }

    handleSelect = ({ target: { value } }) => {
        this.setState({
            theme: value
        });
    };

    render() {
        return (
            <>
                <Select handleSelect={this.handleSelect} />
                <Context.Provider value={themes[this.state.theme]}>
                    <A />
                    <B />
                    <C />
                </Context.Provider>
            </>
        );
    }
}

export default App;
