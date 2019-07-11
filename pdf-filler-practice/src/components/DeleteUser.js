import React from "react";
import Api from "../api/api";

class DeleteUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        };
    }

    deleteUser = e => {
        e.preventDefault();
        Api.delete(this.state.id);
    };

    handleInputDeleteUser = ({ target: { value } }) => {
        this.setState({
            id: value
        });
    };

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.deleteUser}>
                    <input
                        onChange={this.handleInputDeleteUser}
                        value={this.state.id}
                        type="text"
                        name="username"
                    />
                    <button>Delete user</button>
                </form>
            </div>
        );
    }
}

export default DeleteUser;
