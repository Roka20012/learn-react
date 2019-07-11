import React from "react";
import uuid from "uuid/v1";
import "../MakeUsersList.css"

function MakeUsersList(props) {
    if(props.users.length === 0) return (
        <div>Can't loaded users</div>
    )
    return (
        <ul>
            {props.users.map(el => (
                <li key={uuid()}>{el.name}</li>
            ))}
        </ul>
    );
}

export default MakeUsersList;
