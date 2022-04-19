import axios from 'axios';

const Http = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default Http;
