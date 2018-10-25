import axios from 'axios';

const config = {
  "headers": {
      "Content-Type": "application/json"
  }
}

const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export const checkCredentials = (data) => {
  return axios.post(url, data, config);
};

// fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
//     method: 'post',
//     headers: {"Content-type": "application/json"}
// }).then((result) => {
//     return result.json()
// }).then(user => {
//     console.log(user)
// })

const getUserUrl = (id) => `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;

export const getUserService = ({id}) => {
  return axios.get(getUserUrl(id), config);
}

const newsUrl  = `https://mysterious-reef-29460.herokuapp.com/api/v1/news`;

export const getNewsService = () => {
  return axios.get(newsUrl, config);
}