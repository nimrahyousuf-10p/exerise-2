import axios from 'axios';

export const baseUrl = '';

// All request interceptors to be placed here
axios.interceptors.request.use((config) => {
  //   config.headers.common.Authorization = `Bearer ${token}`;
  return config;
});

// All response interceptors to be placed here
axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
