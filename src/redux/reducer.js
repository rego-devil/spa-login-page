import {SET_SITE_DATA, SET_AUTHENTICATION} from './constants';

const initialState = {
    isAuthenticated: false
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITE_DATA:
            return {...state, ...action.payload};
        case SET_AUTHENTICATION:
            return {...state, ...action.payload};    
        default:
            return state;
  }
};

