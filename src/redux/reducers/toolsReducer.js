import {GET_TOOL, GET_TOOLS, CLEAR_TOOLS,TOOLS_ERROR} from "../actions/actionTypes";

const initialState = {
    tools: [],
    tool: null,
    error: {},
    loading: true
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_TOOL:
            return {
                ...state,
                tool: payload,
                loading: false
            };
        case GET_TOOLS:
            return {
                ...state,
                tools: payload,
                loading: false
            };
        case CLEAR_TOOLS:
            return {
                ...state,
                tools: [],
                tool: null,
                loading: false
            };
        case TOOLS_ERROR:
            return state;
        default:
            return state;
    }
}
