import React from "react";
import themeHOC from './themeHoc';

class C extends React.Component {
    render() {
        return (
            <div className="C" style={this.props.theme}>
            </div>
        );
    }
}

export default themeHOC(C);