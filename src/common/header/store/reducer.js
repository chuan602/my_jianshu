import { INPUT_BLUR, INPUT_FOCUS } from "./actionTypes";
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focusFlag: false,
    mouseIn: false,
    searchList: [],
    currentPage: 1,
    totalPage: 1
});

export default (immutable = defaultState, action) => {
    switch (action.type) {
        case INPUT_FOCUS:
            return immutable.set("focusFlag", action.value);
        case INPUT_BLUR:
            return immutable.set("focusFlag", action.value);
        case actionTypes.GET_LIST:
            return immutable.merge({
                searchList: action.List,
                totalPage: action.totalPage
            })
        case actionTypes.CHANGE_CUR_PAGE:
            return immutable.set("currentPage", action.value);
        case actionTypes.CHANGE_MOUSE_IN:
            return immutable.set("mouseIn", action.value);
        case actionTypes.CHANGE_MOUSE_LEAVE:
            return immutable.set("mouseIn", action.value);
        default:
            return immutable;
    }
};
