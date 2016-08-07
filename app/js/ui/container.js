import React from "react";
import Input from "./input";
import Results from "./results";

const Container = ({left, right}) => (
    <div>
        <Input />
        <Results left={left} right={right} />
    </div>
);

Container.propTypes = {
    left: React.PropTypes.number.isRequired,
    right: React.PropTypes.number.isRequired
};

export default Container;
