import {SET_SITE_DATA} from './constants';

export const siteData = (data) => {
    return {
        type: SET_SITE_DATA,
        payload: data
    }
};