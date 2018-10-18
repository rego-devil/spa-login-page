import {SET_SITE_DATA, SUCCESS_AUTHENTICATION, FAILURE_AUTHENTICATION} from './constants';

const initialState = {
    isAuthenticated: false,
    user: ''
}

export const session = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITE_DATA:
            return {...state, ...action.payload};
        case SUCCESS_AUTHENTICATION:
            return {...state, user: action.payload.login, isAuthenticated: true};
        case FAILURE_AUTHENTICATION:
            return {...state, errorMsg: action.payload.errorMsg};  
        default:
            return state;
  }
};

