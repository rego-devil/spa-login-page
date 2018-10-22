import {credentials} from '../data/login';

export const checkCredentials = ({login = '', password = ''}) => { 
  return login === credentials.username && password === credentials.password
}