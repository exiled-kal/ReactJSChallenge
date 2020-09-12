import axios from 'axios';

const instance = axios.create({
  //api (cloud function)
  baseURL: '...',
});

export default instance;
