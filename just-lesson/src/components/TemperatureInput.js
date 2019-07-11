import React from "react";
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
    c: "Celsius",
    f: "Farengeit"
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target: { value } }) {
        this.props.onTemperatureChange(value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={temperature} />
            </fieldset>
        );
    }
}

export default TemperatureInput;
