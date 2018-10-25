import * as constants from './constants';
import {checkCredentials, getUserService, getNewsService} from '../services';
import {glossary} from '../data/glossary';
import {chooseAttractiveMessage} from '../helpers/session';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};

export const setAuthentication = (data) => (dispatch) => {

    dispatch({
        type: constants.START_AUTHENTICATION,
    });

    checkCredentials(data).then((response) => {

        let status = response.data.status;
        let id = response.data.data;
        

        if(status === 'err') {
            dispatch({
                type: constants.FAILURE_AUTHENTICATION,
                payload: {
                    errorMsg:  chooseAttractiveMessage(response.data.message)
                }
            });
        }

        if(status === 'ok') {
            dispatch({
                type: constants.SUCCESS_AUTHENTICATION,
                payload: id
            }); 
        }

    }).catch((error) => {
        dispatch({
            type: constants.FAILURE_AUTHENTICATION,
            payload: {
                errorMsg:  chooseAttractiveMessage(error.message)
            }
        });
    });


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
    type: constants.LOGOUT     
});


export const getUser = (data) => (dispatch) => {

    dispatch({
        type: constants.START_GET_USER_INFO,
    });

    getUserService(data).then((response) => {
      
        let status = response.data.status;
        
        if(status === 'err') {
            dispatch({
                type: constants.GET_USER_INFO_FAILED,
                payload: {
                    errorMsg:  chooseAttractiveMessage(response.data.message)
                }
            });
        }

        if(status === 'ok') {
            const modifiedSocial = [...response.data.data.social];
            const index = modifiedSocial.findIndex((item) => item.label === 'web')
            modifiedSocial.move(index,0);

            dispatch({
                type: constants.GET_USER_INFO_SUCCESS,
                payload: {...response.data.data, social: modifiedSocial}
            }); 
        }
    })
}


export const getNews = (data) => (dispatch) => {

    dispatch({
        type: constants.START_GET_NEWS,
    });

    getNewsService(data).then((response) => {
      
        let status = response.data.status;
        
        if(status === 'err') {
            dispatch({
                type: GET_NEWS_FAILED,
                payload: {
                    errorMsg:  chooseAttractiveMessage(response.data.message)
                }
            });
        }

        if(status === 'ok') {
            dispatch({
                type: constants.GET_NEWS_SUCCESS,
                payload: { data: response.data.data }
            }); 
        }
    })
}

