import {credentials} from '../data/login';
import {glossary} from '../data/glossary';

export const checkCredentials = ({login = '', password = ''}) => { 
  return login === credentials.username && password === credentials.password;
}

export const chooseAttractiveMessage = (error) => {
  if(error === 'wrong_email_or_password') return glossary.errorMsg;
  if(error === 'Request failed with status code 404') return 'Server is not available';
  if(error === 'user_not_found') return 'User not found';
}

Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};

const arr = [{id: '1'},{id: '3'},{id: '4'}];
// const obj = arr.reduce((acc, el, index) => { 
//   return { ...acc, [el.id]: el.id  } 
// }, {});

