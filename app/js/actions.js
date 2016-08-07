export const SET_VALUES = "SET_VALUES";

export const setValues = (left, right) => {
    return {
        type: SET_VALUES,
        left: left,
        right: right
    };
};
