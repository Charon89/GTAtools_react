import {
    GET_TOOL,
    GET_TOOLS,
    CLEAR_TOOLS,
    GET_CATEGORIES,
    TOOLS_ERROR,
    GET_TOOLS_BY_CATEGORY,
} from "../actions/actionTypes";

const initialState = {
    tools: [],
    tool: null,
    categories: [],
    category: '',
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
        case GET_TOOLS_BY_CATEGORY:
            return {
                ...state,
                tools: payload,
                loading: false
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload,
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
