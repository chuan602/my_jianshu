import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getList = value => ({
    type: actionTypes.GET_LIST,
    List: fromJS(value),
    totalPage: Math.ceil(value.length / 10)
})
export const inputFocusFun = () => ({
    type: actionTypes.INPUT_FOCUS,
    value: true
})
export const inputBlurFun = () => ({
    type: actionTypes.INPUT_BLUR,
    value: false
})
export const getSearchList = () => (
    dispatch => {
        axios.get('/api/headerSearchList.json').then(res => {
            dispatch(getList(res.data.data));
        }).catch(() => {
            console.log('error');
        })
    }
)
export const changeCurPageFun = value => ({
    type: actionTypes.CHANGE_CUR_PAGE,
    value
})
export const ChangeMouseInFun = () => ({
    type: actionTypes.CHANGE_MOUSE_IN,
    value: true
})
export const ChangeMouseLeaveFun = () => ({
    type: actionTypes.CHANGE_MOUSE_LEAVE,
    value: false
})