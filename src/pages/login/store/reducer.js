import { fromJS } from 'immutable';
import * as actionType from './actionTypes';

const defaultState = fromJS({
    loginFlag: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.LOGOUT:
            return state.set("loginFlag", false);
        
        case actionType.LOGIN_SUCCESS:
            return state.set("loginFlag", true);
            
        default:
            return state;
    }
}