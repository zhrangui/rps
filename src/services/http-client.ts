import axios from 'axios';
import store from '../stores/store';
import { saveDashboard } from '../stores/client-reducer';

import mockData from "../test/mock-data";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_REAL_VALUE_API,
  timeout: 10000
});

const getDashboard = (id: string) => {
  return httpClient.post("access-qa.rpsrealsolutions.com/api/Orders/" + id)
    .then(response => {
      store.dispatch(saveDashboard(response.data));
      return response;
    })
    .catch(e => {
      console.error(e);
      store.dispatch(saveDashboard(mockData.dashboard));
    })
}

export {
  httpClient,
  getDashboard
};