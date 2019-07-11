import React from 'react';

function BoilingVerdict (props) {
    if(props.celsius >= 100) {
        return <p>Water boil</p>
    }
    return <p>Water not boil</p>
}

export default BoilingVerdict;