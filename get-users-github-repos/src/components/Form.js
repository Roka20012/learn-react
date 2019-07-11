import React from "react";

function Form(props) {
    return (
        <form action="#" onSubmit={props.getRepos}>
            <input
                autoComplete="off"
                type="text"
                name="username"
                placeholder="Enter username..."
                onChange={props.handleInput}
                value={props.inputValue}
            />
            <button className="get-user-repos">Get repos</button>
        </form>
    );
}

export default Form;
