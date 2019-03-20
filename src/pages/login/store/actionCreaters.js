import * as actionTypes from "./actionTypes";
import axios from "axios";

const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const getLoginData = (acc, psw) => {
    return dispatch => {
        axios
            .get(`/api/login.json?account=${acc}&password=${psw}`)
            .then(res => {
                const result = res.data.data;
                result ? dispatch(loginSuccess()) : console.log("err");
            })
            .catch(() => {
                console.log("server errer");
            });
    };
};
