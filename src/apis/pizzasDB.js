import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-we-love-pizza.netlify.app:5000',
  // baseURL: 'http://localhost:3333',
});
