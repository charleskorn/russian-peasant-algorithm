import React from "react";
import Calculator from "../calculator";
import classNames from "classnames";

const ResultItem = ({ step }) => {
    const classes = classNames({
        "result-item": true,
        "excluded": !step.included
    });

    return (<div className={classes}>
        <div className="left">
            {step.left}
        </div>
        <div className="right">
            {step.right}
        </div>
    </div>);
};

ResultItem.propTypes = {
    step: React.PropTypes.shape({
        left: React.PropTypes.number.isRequired,
        right: React.PropTypes.number.isRequired,
        included: React.PropTypes.bool.isRequired
    }).isRequired
};

const Results = ({ left, right }) => {
    const calculator = new Calculator();
    const result = calculator.calculate(left, right);
    const resultItems = result.steps.map((step) => <ResultItem step={step} key={JSON.stringify(step)} />);

    return (
        <div className="results">
            {resultItems}
            <div className="total">{result.result}</div>
        </div>
    );
};

Results.propTypes = {
    left: React.PropTypes.number.isRequired,
    right: React.PropTypes.number.isRequired
};

export default Results;
