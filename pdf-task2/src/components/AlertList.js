import React from "react";

const Alerts = props => (
    <>
        {props.alerts.map((el, i) => (
            <props.Alert text={el} key={i} />
        ))}
    </>
);

export default Alerts;
