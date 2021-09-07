import axios from 'axios';
import store from '../stores/store';
import { saveProperty } from '../stores/server-reducer';
import PrpertyRequest from './types/property-request.type';
import ProperyResponse from './types/property-response.type';

import mockData from "../test/mock-data";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_REAL_VALUE_API,
  timeout: 10000
});

const getPropertyResponse = (propertyRequest: PrpertyRequest) => {
  return httpClient.post<ProperyResponse>("api/Data/Valuation", propertyRequest)
    .then(response => {
      store.dispatch(saveProperty(response.data));
      return response;
    })
    .catch(e => {
      console.error(e);
      store.dispatch(saveProperty(mockData.propertyResponse));
    })
}

export {
  httpClient,
  getPropertyResponse
};