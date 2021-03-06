import {
  UPDATE_READ_PAGES,
  UPDATE_TOTAL_PAGES,
  UPDATE_START_PAGES
} from '../actions/pages';

const defaultState = {
  read: 0,
  total: 183,
  start: 1,
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_READ_PAGES: {
      newState.read = action.pages;
      return newState;
    }
    case UPDATE_TOTAL_PAGES: {
      newState.total = action.pages;
      return newState;
    }
    case UPDATE_START_PAGES: {
      newState.start = action.pages;
      return newState;
    }
    default: return state;
  }
}

export default reducer;