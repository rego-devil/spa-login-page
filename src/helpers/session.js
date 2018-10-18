import {credentials} from '../data/login';
console.log('loginData', credentials);

export const checkCredentials = ({login, password}) => { 
  return login === credentials.username && password === credentials.password
}