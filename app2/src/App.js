import React from "react";
import "./App.css";
import B from "./components/B";

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps (A)");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount (A)");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate (A)");
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate (A)");
    }

    getName = ({target: {value}}) => {
        this.setState({
            name: value
        });
    }

    render() {
        console.log("render A");
        return (
            <div>
                <input type="text" onChange={this.getName}/>
                <B name={this.state.name}/>
            </div>
        );
    }
}

export default A;
