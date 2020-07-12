import axios from 'axios';
import {
    GET_TOOLS,
    GET_TOOL,
    CLEAR_TOOLS,
    TOOLS_ERROR,
    GET_CATEGORIES,
    GET_TOOLS_BY_CATEGORY,

} from './actionTypes';

const url = 'https://gtatoolsapi.herokuapp.com';

// Get all tools
export const getAllTools = () => async dispatch => {
    dispatch({type: CLEAR_TOOLS});
    try {
        const res = await axios.get(`${url}/tools`);
        dispatch({
            type: GET_TOOLS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TOOLS_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
};

// Get tool by ID
export const getTool = (toolId) => async dispatch => {
    dispatch({type: CLEAR_TOOLS});
    try {
        const res = await axios.get(`${url}/tools/${toolId}`);
        dispatch({
            type: GET_TOOL,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TOOLS_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
};
// Get tools by category
export const getToolsByCategory = (category) => async dispatch => {
    // dispatch({type: CLEAR_TOOLS});
    try {
        const res = await axios.get(`${url}/tools?category=${category}`);
        dispatch({
            type: GET_TOOLS_BY_CATEGORY,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TOOLS_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
};

// Get categories
export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get(`${url}/tools?field=category`);
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TOOLS_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
};
