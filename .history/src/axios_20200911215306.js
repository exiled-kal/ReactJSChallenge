import axios from 'axios';

const instance = axios.create({
  //api url(cloud function)
  baseURL: '...',
});

export default instance;
