import React from "react";

function User(props) {
    return (
        <div className="user">
            <img
                src={props.avatar}
                className="user-avatar"
                alt="user-avatar"
                width="150px"
                height="150px"
            />
            <span className="username">{props.username}</span>
        </div>
    );
}

export default User;
