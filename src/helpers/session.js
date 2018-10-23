import {credentials} from '../data/login';
import {glossary} from '../data/glossary';

export const checkCredentials = ({login = '', password = ''}) => { 
  return login === credentials.username && password === credentials.password
}

export const chooseAttractiveMessage = (error) => {
  if(error === 'wrong_email_or_password') return glossary.errorMsg
}