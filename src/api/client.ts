import axios from "axios";

export const client = axios.create();
client.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

client.interceptors.response.use(
  (response) => response.data,
  (response) => Promise.reject(response.response.data)
);

export default client;
