const axios = require('axios').default;
// import axios from 'axios';

const API_KEY = '30789164-35a7cf56b7677b8602e966f0f';

export default async function getData(request) {
  const config = {
    responseType: 'json',
    baseURL: 'https://pixabay.com/api',
  };

  console.log(request);
  const response = await axios.get(
    `/?key=${API_KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true`,
    config
  );

  return response;
}
