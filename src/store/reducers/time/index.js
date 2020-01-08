import { combineReducers } from 'redux';

import listenedReducer from './listened';
import totalReducer from './total';
import introReducer from './intro';
import outroReducer from './outro';

export default combineReducers({
  listened: listenedReducer,
  total: totalReducer,
  intro: introReducer,
  outro: outroReducer,
});