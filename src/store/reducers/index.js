import { combineReducers } from 'redux';

import timeReducer from './time';
import pagesReducer from './pages';
import savedSettingsReducer from './savedSettings';

export default combineReducers({
  time: timeReducer,
  pages: pagesReducer,
  savedSettings: savedSettingsReducer,
});