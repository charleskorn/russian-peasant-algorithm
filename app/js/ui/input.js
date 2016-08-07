import React from "react";
import { connect } from "react-redux";
import { setValues } from "../actions";

const Input = ({ dispatch }) => {
    let left;
    let right;

    const onInputChange = () => {
        const leftValue = parseInt(left.value, 10) || 0;
        const rightValue = parseInt(right.value, 10) || 0;

        dispatch(setValues(leftValue, rightValue));
    };

    return (
        <div className="inputContainer">
            <input className="left" type="number" defaultValue="10" onChange={onInputChange} ref={node => {left = node;}} />
            <span className="multiplication-sign">&times;</span>
            <input className="right" type="number" defaultValue="20" onChange={onInputChange} ref={node => {right = node;}} />
        </div>
    );
};

Input.propTypes = {
    dispatch: React.PropTypes.func.isRequired
};

export default connect()(Input);
