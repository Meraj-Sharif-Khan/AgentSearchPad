import axios from "axios";

const baseUrl = import.meta.env.VITE_API;
const token = import.meta.env.VITE_TOKEN;


axios.defaults.baseURL = `${baseUrl}`;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

const httpServices = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpServices;