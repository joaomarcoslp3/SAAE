import axios from 'axios';

const api = axios.create({
  baseURL: '26.174.50.121:3000'
});

export default api;