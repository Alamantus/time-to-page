import { combineReducers } from 'redux';

import timeReducer from './time';
import pagesReducer from './pages';

export default combineReducers({
  time: timeReducer,
  pages: pagesReducer,
});