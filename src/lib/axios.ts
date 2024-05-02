import Axios from 'axios';

export const dummyAxios = Axios.create({
  baseURL: 'https://dummyjson.com',
  params: {
    delay: 1000,
  },
});

export const internalAxios = Axios.create({
  baseURL: 'http://localhost:3000',
});
