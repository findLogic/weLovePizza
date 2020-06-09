import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-we-love-pizza.herokuapp.com:5000',
  // baseURL: 'http://localhost:3333',
});
