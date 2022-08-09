import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import {BASE_URL, TIMEOUT} from '../const';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );


  return api;
};

