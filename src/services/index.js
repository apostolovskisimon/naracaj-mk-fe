import axios from 'axios';
import qs from 'qs';
export const API_URL = 'http://localhost:1234/v1/';

const request = ({ route = '', method = 'POST', data }) => {
  const requestParams = {
    baseURL: API_URL,
    url: route,
    method,
    data,
  };

  if (method === 'GET') {
    delete requestParams.data;
    requestParams.method = 'GET';
    requestParams.params = data;
    requestParams.paramsSerializer = params => qs.stringify(params);
  }
  // @ts-ignore
  return axios.request(requestParams);
};

export default request;
