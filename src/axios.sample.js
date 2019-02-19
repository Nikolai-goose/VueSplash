import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    'client_id': 'your ID'
  },
});

export default instance;