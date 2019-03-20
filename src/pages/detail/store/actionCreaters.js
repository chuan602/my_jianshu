import axios from 'axios';
import * as actionTypes from './actionTypes';

const getedData = (title,img,content) => ({
    type: actionTypes.GET_JSON,
    title,
    img,
    content
})

export const ajaxGetData = (id) => {
    return (dispatch) => {
        axios.get("/api/detail.json")
        .then(res => {
            const data = res.data.data;
            const [result] = data.filter(item => item.id == id);
            dispatch(getedData(result.title,result.img,result.content));
        })
    }
}