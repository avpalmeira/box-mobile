import axios from 'axios';

// custom url for REST api requests
const url = 'https://box-storage.herokuapp.com';

const api = axios.create({
  baseURL: url
});

export default api;
