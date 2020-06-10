import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-we-love-pizza.herokuapp.com',
  // baseURL: 'http://localhost:3333',
});
