import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';
export const checkCredentials = data => axios.post(url, data, config);

const getUserUrl = id => `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;
export const getUserService = ({ id }) => axios.get(getUserUrl(id), config);


const newsUrl = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';
export const getNewsService = () => axios.get(newsUrl, config);
