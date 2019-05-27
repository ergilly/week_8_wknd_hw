import { combineReducers } from 'redux';

import bucketReducer from './bucket_reducer.js';
import countriesReducer from './countriesReducer.js';

export default combineReducers({
  bucketlist: bucketReducer,
  countries: countriesReducer
});
