import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getRequest = (
  endpoint,
  additionalHeaders,
  params,
  responseType
) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      ...additionalHeaders,
    },
    params,
    responseType,
  };
  return axios.get(`${BASE_API_URL}${endpoint}`, axiosConfig);
};

export const postRequest = (
  endpoint,
  payload,
  additionalHeaders,
  params,
  onUploadProgress
) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",

      ...additionalHeaders,
    },
    params,
    onUploadProgress,
  };
  return axios.post(`${BASE_API_URL}${endpoint}`, payload, axiosConfig);
};

const responseHandler = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  }
  return Promise.reject(response);
};

axios.interceptors.response.use((response) => responseHandler(response));
