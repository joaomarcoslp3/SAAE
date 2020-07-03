import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.174.50.121:8080'
});

export default api;