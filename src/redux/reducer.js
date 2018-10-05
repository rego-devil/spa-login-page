import {SET_SITE_DATA} from './constants';

export const login = (state = {}, action) => {
  switch (action.type) {
      case SET_SITE_DATA:
          return {...state, ...action.payload};
      default:
          return state;
  }
};

