import {OPEN_LOGIN, CLOSE_LOGIN} from "../actions/actionTypes";

const initialState = {
    loginOpener: false,
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case OPEN_LOGIN:
            return {
                ...state,
                loginOpener: !state.loginOpener
            }
        case CLOSE_LOGIN:
            return {
                ...state,
                loginOpener: false
            }
        default:
            return state
    }

}
