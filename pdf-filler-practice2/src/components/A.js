import React from "react";
import themeHOC from './themeHoc';

class A extends React.Component {
    render() {
        return (
            <div className="A" style={this.props.theme}>
            </div>
        );
    }
}

export default themeHOC(A);
