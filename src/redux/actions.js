import {SET_SITE_DATA, SET_AUTHENTICATION} from './constants';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};

export const setAuthentication = (data) => {
    return {
        type: SET_AUTHENTICATION,
        payload: data
    }
};

export const isValidAuth = (data) => {
    const {login, password} = data;
    console.log(login, password)
    return {
        type: SET_AUTHENTICATION,
        payload: data
    }
};

