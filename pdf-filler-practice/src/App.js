import React from "react";
import "./App.css";
import Api from "./api/api";
import MakeUsersList from "./components/MakeUsersList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loaded: false,
            username: "",
            id: "",
            newUsername: ""
        };
    }

    componentDidMount() {
        Api.get().then(users => {
            this.setState({
                list: users,
                loaded: true
            });
        });
    }

    getUsers = e => {
        e.preventDefault();
        Api.get(this.state.username).then(users => {
            if (users) {
                this.setState({
                    list: users,
                    loaded: true
                });
            }
        });
    };

    handleInput = ({ target: { value } }) => {
        this.setState({
            username: value,
            loaded: false
        });
    };

    handleInputAddUser = ({ target: { value } }) => {
        this.setState({
            newUsername: value
        });
    };

    handleInputDeleteUser = ({ target: { value } }) => {
        this.setState({
            id: value
        });
    };

    addUser = e => {
        e.preventDefault();
        Api.put(this.state.newUsername);
        Api.get().then(users => {
            console.log("users", users);
            if (users) {
                this.setState({
                    list: users,
                    loaded: true,
                    newUsername: ""
                });
            }
        });
    };

    deleteUser = e => {
        e.preventDefault();
        Api.delete(this.state.id);
        Api.get().then(users => {
            if (users) {
                this.setState({
                    list: users,
                    loaded: true,
                    id: ""
                });
            }
        });
    };

    render() {
        if (this.state.list.length === 0) return <div>Loading...</div>;
        return (
            <div>
                <form action="#" onSubmit={this.addUser}>
                    <input
                        onChange={this.handleInputAddUser}
                        value={this.state.newUsername}
                        type="text"
                        name="username"
                    />
                    <button>Add user</button>
                </form>
                <form action="#" onSubmit={this.deleteUser}>
                    <input
                        onChange={this.handleInputDeleteUser}
                        value={this.state.id}
                        type="text"
                        name="username"
                    />
                    <button>Delete user</button>
                </form>
                <form action="#" onSubmit={this.getUsers}>
                    <input
                        onChange={this.handleInput}
                        value={this.state.username}
                        type="text"
                        name="username"
                    />
                    <button>Get users</button>
                </form>
                {this.state.loaded ? (
                    <MakeUsersList users={this.state.list} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
}

export default App;
