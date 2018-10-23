import axios from 'axios';

const config = {
  "headers": {
      "Content-Type": "application/json"
  }
}

const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export const checkCredentials = (data) => {
  return axios.post(url, data);
};