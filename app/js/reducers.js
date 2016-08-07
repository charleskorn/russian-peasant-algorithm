import {SET_VALUES} from "./actions";

const initialState = {
    left: 10,
    right: 20
};

const russianPeasantApp = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES:
            return Object.assign({}, state, {
                left: action.left,
                right: action.right
            });

        default:
            return state;
    }
};

export default russianPeasantApp;
