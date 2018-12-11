import * as constants from './constants';

const initialState = {
  isAuthenticated: false,
  user: '',
  id: undefined,
  errorMsg: '',
  isFetching: false,
  userInfo: null,
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SITE_DATA:
      return { ...state, ...action.payload };
    case constants.SUCCESS_AUTHENTICATION:
      return {...state, user: action.payload.login, isAuthenticated: true, id: action.payload.id};
    case constants.START_GET_USER_INFO:
      return { ...state, isFetching: true };

    case constants.GET_USER_INFO_SUCCESS:

      const socials = action.payload.social;
      if(socials) {
        const index = socials.findIndex((item) => item.label === 'web');
        socials.move(index, 0);
      } 
      
      return { ...state, isFetching: false, userInfo: action.payload };

    case constants.GET_USER_INFO_FAILED:
      return { ...state, isFetching: false, errorMsg: action.payload.errorMsg };
    case constants.LOGOUT:
      return {
        ...state, isAuthenticated: false, id: undefined, userInfo: null,
      };
    default:
      return state;
  }
};

const initialNewsState = {
  data: null,
  isFetching: false,
  errorMsg: '',
};

export const news = (state = initialNewsState, action) => {
  switch (action.type) {
    case constants.START_GET_NEWS:
      return { ...state, isFetching: true };
    case constants.GET_NEWS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload.data };
    case constants.GET_NEWS_FAILED:
      return { ...state, isFetching: false, data: action.payload.errorMsg };
    default:
      return state;
  }
};
