import axios from "axios";
import * as actionTypes from './actionTypes';

const initStoreCreaters = (newsList,recommendList,totalPage) => ({
    type: actionTypes.INIT_STORE,
    newsList,
    recommendList,
    totalPage
});

export const initStore = () => (dispatch) => {
    axios
        .get("/api/home.json")
        .then(res => {
            const data = res.data.data;
            const totalPage = Math.ceil(data.newsList.length / 5);
            dispatch(initStoreCreaters(data.newsList,data.recommendList,totalPage));
        })
        .catch(() => {
            console.log("error");
        });
};
export const changeCurPage = (curPage) => ({
    type: actionTypes.CHANGE_CUR_PAGE,
    curPage
})
export const changeShowLoadMore = (value) => ({
    type: actionTypes.CHANGE_LOADMORE,
    value
})
export const changeShowBackTop = (value) => ({
    type: actionTypes.CHANGE_SHOW_BACKTOP,
    value
})