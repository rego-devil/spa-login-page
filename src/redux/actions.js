import {SET_SITE_DATA, SUCCESS_AUTHENTICATION, FAILURE_AUTHENTICATION, LOGOUT} from './constants';
import {checkCredentials} from '../services';
import {glossary} from '../data/glossary';
import {chooseAttractiveMessage} from '../helpers/session';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};

export const setAuthentication = (data) => (dispatch) => {
       
    checkCredentials(data).then((result) => {
        console.log(result)
        if(result.data.status === 'err') {
            dispatch({
                type: FAILURE_AUTHENTICATION,
                payload: {
                    errorMsg:  chooseAttractiveMessage(result.data.message)
                }
            });
        }
    })
    // if(checkCredentials(data)) {

    //     dispatch({
    //         type: SUCCESS_AUTHENTICATION,
    //         payload: data
    //     });

    // } else {
    //     dispatch({
    //         type: FAILURE_AUTHENTICATION,
    //         payload: {
    //             errorMsg: glossary.errorMsg
    //         }
    //     });
    // }
        
};

export const logout = (data) => ({
    type: LOGOUT     
});


