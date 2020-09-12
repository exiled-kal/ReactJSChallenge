import axios from 'axios';

const instance = axios.create({
    //api url(cloud u)
  baseURL: '...',
});

export default instance;
