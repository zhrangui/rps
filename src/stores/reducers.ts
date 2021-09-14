import { combineReducers } from 'redux';
import clientReduceer from './client-reducer';
import serverReducer from './server-reducer';

const rootReducer = combineReducers({
  client: clientReduceer,
  server: serverReducer
})

export default rootReducer;