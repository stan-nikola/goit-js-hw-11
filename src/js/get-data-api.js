const axios = require('axios').default;
// import axios from 'axios';

const API_KEY = '30789164-35a7cf56b7677b8602e966f0f';

export default async function getData(searchQuery, page) {
  const config = {
    responseType: 'json',
    baseURL: 'https://pixabay.com/api',
  };

  response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    config
  );

  return response;
}
