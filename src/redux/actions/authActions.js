import {OPEN_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR, USER_LOADED} from "./actionTypes";
import axios from "axios";

const url = 'https://gtatoolsapi.herokuapp.com';
const token = localStorage.getItem('token');

const authAxios = axios.create({
    baseURL: url,
    headers:{
        Authorization: `Bearer ${token}`
    }
})

// Toggle login window
export const openLoginWindow = () => dispatch => {
    dispatch({
        type: OPEN_LOGIN
    })
};

// Load User
export const loadUser = () => async dispatch => {

    try {
       if (localStorage.token) {
           dispatch({
               type: USER_LOADED,
           });
       }
    } catch (e) {
        console.log(e.message)
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Login User
export const login = (username, password) => async dispatch => {

    try {
        const res = await authAxios.post(`/users/login`, {username, password});
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        console.log(e)
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

// Logout /Clear profile
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
};
