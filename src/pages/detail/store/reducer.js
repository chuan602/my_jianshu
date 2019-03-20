import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title: "",
    content: "",
    img: ""
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_JSON:
            return state.merge({
                title: action.title,
                img: action.img,
                content: action.content
            })                
    
        default:
            return state;
    }
}