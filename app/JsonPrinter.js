import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const JsonPrinter = (props) => (
    <pre>{JSON.stringify(props.json, undefined, 2)}</pre>
);

JsonPrinter.propTypes = {
    json: ReactPropTypes.object.isRequired
};

export default JsonPrinter;
