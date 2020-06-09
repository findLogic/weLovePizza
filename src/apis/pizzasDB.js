import axios from 'axios';

export default axios.create({
  baseURL: 'https://optimistic-spence-6b2572.netlify.app:3333',
  // baseURL: 'http://localhost:3333',
});
