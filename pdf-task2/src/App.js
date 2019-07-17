import React from "react";
import withPortal from "./hoc/withPortal";
import withPortalTimeout from "./hoc/withPortalTimeout";
import AlertList from "./components/AlertList";
import Alert from "./components/Alert";

const alertList = document.querySelector(".alert-list");

const AlertHoc = withPortal(alertList)(Alert);
const AlertWithTimeout = withPortalTimeout(2000)(AlertHoc);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            alerts: []
        };
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    handleInput = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        });
    };

    addAlert = e => {
        e.preventDefault();

        this.setState({
            inputValue: "",
            alerts: [...this.state.alerts, this.state.inputValue]
        });
        this.textInput.current.focus();
    };

    render() {
        return (
            <div>
                <h1>Alerts App</h1>
                <form action="#" onSubmit={this.addAlert}>
                    <input
                        type="text"
                        ref={this.textInput}
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                    />
                    <button value="Add alert" disabled={!this.state.inputValue}>
                        Add alert
                    </button>
                </form>
                <AlertList
                    alerts={this.state.alerts}
                    Alert={AlertWithTimeout}
                />
            </div>
        );
    }
}

export default App;
