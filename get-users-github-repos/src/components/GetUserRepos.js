import React from "react";
import MakeReposList from "./MakeReposList";

class GetUserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null,
            username: null,
            avatarUrl: null,
            error: null
        };
        this.textInput = React.createRef();
    }

    componentDidMount() {
        let urlSearchParams = new URLSearchParams(window.location.search);
        let username = urlSearchParams.get("username");
        this.textInput.current.value = username;
        if(username === null) return;
        if (!username || username.match(/\s+/)) {
            this.showError();
            return;
        }

        this.getRepos(null, username);
    }

    showError = () => {
        this.setState({
            repos: null,
            username: null,
            avatarUrl: null,
            error: "Can't find this please enter correct name!"
        });
    };

    getUserName = () => {
        let username = this.textInput.current.value.trim();
        if (!username || username.match(/\s+/)) return;
        return username;
    };

    getRepos = async (e, username) => {
        if (e) e.preventDefault();
        username = username || this.getUserName();
        if (!username) {
            this.showError();
            return;
        }

        try {
            const URL = `https://api.github.com/users/${username}/repos`;
            let userRepos = await fetch(URL).then(respone => respone.json());
            this.setState({
                repos: userRepos,
                username: username,
                avatarUrl: userRepos[0].owner.avatar_url,
                error: null
            });
        } catch (e) {
            this.showError();
        }
    };

    render() {
        return (
            <div className="repos-container">
                <form action="#" onSubmit={this.getRepos}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username..."
                        ref={this.textInput}
                    />
                    <button className="get-user-repos">Get repos</button>
                </form>
                <div className="user-info">
                    {this.state.avatarUrl ? (
                        <div className="user">
                            <img
                                src={this.state.avatarUrl}
                                className="user-avatar"
                                alt="user-avatar"
                                width="150px"
                                height="150px"
                            />
                            <span className="username">
                                {this.state.username}
                            </span>
                        </div>
                    ) : (
                        ""
                    )}
                    {this.state.repos &&
                    this.state.username &&
                    !this.state.error ? (
                        <MakeReposList repos={this.state.repos} />
                    ) : (
                        <p className="error">{this.state.error}</p>
                    )}
                </div>
            </div>
        );
    }
}

export default GetUserRepos;
