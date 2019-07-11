import React from "react";
import ReposList from "./ReposList";
import User from "./User";
import Form from "./Form";

class UserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null,
            username: null,
            inputValue: "",
            avatar: null,
            error: null,
            loaded: null
        };
    }

    componentDidMount() {
        let urlSearchParams = new URLSearchParams(window.location.search);
        let username = urlSearchParams.get("username");

        if (username === null) return;
        if (!username || username.match(/\s+/)) {
            this.setState({
                error: "Can't find this please enter correct name!"
            });
            return;
        }

        this.setState({
            inputValue: username
        });
        this.getRepos(null, username);
    }

    getRepos = async (e, usernameURL) => {
        if (e) e.preventDefault();
        if (this.state.username === this.state.inputValue) return;
        if (!this.state.inputValue && !usernameURL) {
            this.setState({
                error: "Can't find this please enter correct name!"
            });
            return;
        }
        try {
            this.setState({
                loaded: false,
                error: null
            });
            const REPOS_URL = `https://api.github.com/users/${this.state
                .inputValue || usernameURL}/repos`;
            const USER_URL = `https://api.github.com/users/${this.state
                .inputValue || usernameURL}`;
            let userRepos = await fetch(REPOS_URL).then(respone =>
                respone.json()
            );
            let user = await fetch(USER_URL).then(response => response.json());
            if (user.message || userRepos.message) throw new Error("Error");
            this.setState({
                repos: userRepos,
                username: this.state.inputValue,
                avatar: user.avatar_url,
                error: null,
                loaded: true
            });
        } catch (e) {
            this.setState({
                error: "Can't find this please enter correct name!"
            });
        }
    };

    handleInput = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        });
    };

    render() {
        let userInfo;
        if (this.state.error) {
            userInfo = (
                <p className="error">
                    Can't find this please enter correct name!
                </p>
            );
        } else {
            if (this.state.loaded) {
                userInfo = (
                    <>
                        <User
                            username={this.state.username}
                            avatar={this.state.avatar}
                        />
                        <ReposList repos={this.state.repos} />{" "}
                    </>
                );
            } else if (this.state.loaded === null) {
                userInfo = null;
            } else {
                userInfo = <p className="error">loading...</p>;
            }
        }
        return (
            <div className="repos-container">
                <Form
                    getRepos={this.getRepos}
                    handleInput={this.handleInput}
                    inputValue={this.state.inputValue}
                />
                <div className="user-info">{userInfo}</div>
            </div>
        );
    }
}

export default UserRepos;
