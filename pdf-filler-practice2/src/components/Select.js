import React from "react";

class Select extends React.Component {
    render() {
        return (
            <select size="3" multiple name="theme" onChange={this.props.handleSelect}>
                <option value="black">black</option>
                <option value="white">
                    white
                </option>
                <option value="red">red</option>
                <option value="blue">blue</option>
            </select>
        );
    }
}

export default Select;
