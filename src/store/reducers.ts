import { combineReducers } from 'redux';
import clientReduceer from './client-reducer';
import properyReducer from './server-reducer';

const rootReducer = combineReducers({
  client: clientReduceer,
  server: properyReducer
})

export default rootReducer;