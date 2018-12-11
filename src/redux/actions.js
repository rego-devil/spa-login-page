import * as constants from './constants';
import {checkCredentials, getUserService, getNewsService} from '../services';
import {glossary} from '../data/glossary';
import {chooseAttractiveMessage} from '../helpers/session';
import { SubmissionError } from 'redux-form';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};

export const setAuthentication = (data) => (dispatch) => {

    return checkCredentials(data).then((response) => {			

      let status = response.data.status;
      let id = response.data.data;
				
      if(status === 'err') {
				throw new SubmissionError({
					// password: 'wrong password',
					_error: 'Login or password failed!',
				})
      }

      if(status === 'ok') {
        dispatch({
          type: constants.SUCCESS_AUTHENTICATION,
          payload: id
        }); 
      }

    }).catch((error) => {
			const currentErrors  = error.errors || { _error: chooseAttractiveMessage(error.message) };
			throw new SubmissionError(currentErrors)
	});        
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
				dispatch({
					type: constants.GET_USER_INFO_SUCCESS,
					payload: {...response.data.data}
				}); 
			}
    }).catch(error => {
			console.log('333', error);
			dispatch({
				type: constants.GET_USER_INFO_FAILED,
				payload: {
					errorMsg:  chooseAttractiveMessage(error.message)
				}
			});
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

