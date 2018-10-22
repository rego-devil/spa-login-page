import {SET_SITE_DATA, SUCCESS_AUTHENTICATION, FAILURE_AUTHENTICATION, LOGOUT} from './constants';

const initialState = {
    isAuthenticated: false,
    user: ''
}

export const session = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITE_DATA:
            return {...state, ...action.payload};
        case SUCCESS_AUTHENTICATION:
            return {...state, user: action.payload.login, isAuthenticated: true, errorMsg: ''};
        case FAILURE_AUTHENTICATION:
            return {...state, errorMsg: action.payload.errorMsg, isAuthenticated: false};
        case LOGOUT:
            return {...state, user: '', errorMsg: '', isAuthenticated: false};  
        default:
            return state;
  }
};

