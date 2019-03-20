import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
    newsList: [],
    recommendList: [],
    totalPage: 1,
    currentPage: 1,
    showLoadMore: true,
    showBackTop: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_STORE:
            return state.merge({
                newsList: fromJS(action.newsList),
                recommendList: fromJS(action.recommendList),
                totalPage: action.totalPage
            });
        case actionTypes.CHANGE_CUR_PAGE:
            return state.set("currentPage", action.curPage);
        case actionTypes.CHANGE_LOADMORE:
            return state.set("showLoadMore", action.value);
        case actionTypes.CHANGE_SHOW_BACKTOP:
            return state.set("showBackTop", action.value);
        default:
            return state;
    }
};
