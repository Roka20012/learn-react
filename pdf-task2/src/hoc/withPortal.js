import React from 'react';
import ReactDOM from "react-dom";

const withPortal = domElem => Component => class extends React.Component {
    render() {
        return ReactDOM.createPortal(<Component {...this.props}/>, domElem);
    }
}

export default withPortal;
