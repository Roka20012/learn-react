import React from "react";

const withPortalTimeout = timeout => Component =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timeout
            };
            this.timerID = null;
        }

        componentDidMount() {
            this.timerID = setTimeout(() => {
                this.setState({
                    timeout: null
                });
            }, this.state.timeout);
        }

        componentWillUnmount() {
            clearTimeout(this.timerID);
        }

        render() {
            return this.state.timeout && <Component {...this.props} />;
        }
    };

export default withPortalTimeout;
