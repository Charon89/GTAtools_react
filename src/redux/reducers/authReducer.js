import {
    OPEN_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR, USER_LOADED
} from "../actions/actionTypes";

const initialState = {
    loginOpener: false,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case OPEN_LOGIN:
            return {
                ...state,
                loginOpener: !state.loginOpener
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('username', payload.user.username);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                loginOpener: true,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        case AUTH_ERROR:
            console.log("AUTH ERROR")
            return {}
        default:
            return state
    }

}
