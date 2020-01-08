import { combineReducers } from 'redux';

import timeReducer from './time';

export default combineReducers({
  time: timeReducer,
});