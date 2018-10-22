import {SET_SITE_DATA, SUCCESS_AUTHENTICATION, FAILURE_AUTHENTICATION, LOGOUT} from './constants';
import {checkCredentials} from '../helpers/session';
import {glossary} from '../data/glossary';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};

export const setAuthentication = (data) => (dispatch) => {
       
    if(checkCredentials(data)) {

        dispatch({
            type: SUCCESS_AUTHENTICATION,
            payload: data
        });

    } else {
        dispatch({
            type: FAILURE_AUTHENTICATION,
            payload: {
                errorMsg: glossary.errorMsg
            }
        });
    }
        
};

export const logout = (data) => ({
    type: LOGOUT     
});


