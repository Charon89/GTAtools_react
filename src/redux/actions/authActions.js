import {OPEN_LOGIN, CLOSE_LOGIN} from "./actionTypes";
import axios from "axios";

export const openLoginWindow = () => dispatch => {
        dispatch({
            type: OPEN_LOGIN
        })
    };
