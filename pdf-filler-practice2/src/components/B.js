import React from "react";
import themeHOC from './themeHoc';

class B extends React.Component {
    render() {
        return (
            <div className="B" style={this.props.theme}>
            </div>
        );
    }
}

export default themeHOC(B);