import axios from 'axios';

export const customAxios = axios.create({
  baseURL: "https://api.empregourgente.com",
  timeout: 10000,
});
