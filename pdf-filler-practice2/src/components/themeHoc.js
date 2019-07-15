import React from 'react';
import Context from './context';


const themeHOC = (Component) => class extends React.Component {

    static contextType = Context;

    render() {
        return <Component {...this.props} theme={this.context} />;
    }
}

export default themeHOC;