import axios from 'axios';
import {GET_TOOLS,GET_TOOL, CLEAR_TOOLS, TOOLS_ERROR} from './actionTypes';

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

// Get all tools
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
