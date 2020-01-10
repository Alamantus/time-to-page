import {
  UPDATE_AVAILABLE_SAVES,
  ADD_SAVE,
  EDIT_SAVE,
  REMOVE_SAVE,
} from '../actions/savedSettings';

const defaultState = [];
/* const exampleSavedSettingsObject = {
  name: 'Book Title',
  time: { hours: 10, minutes: 30, seconds: 5 },
  introTime: { minutes: 1, seconds: 23 },
  outroTime: { minutes: 5, seconds: 48 },
  pages: { total: 300, start: 10 },
} */

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_AVAILABLE_SAVES: {
      return [...action.settings];
    }
    case ADD_SAVE: {
      return [action.settings, ...state];
    }
    case EDIT_SAVE: {
      return [...state.slice(0, action.index), action.settings, ...state.slice(action.index + 1)];
    }
    case REMOVE_SAVE: {
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    }
    default: return state;
  }
}

export default reducer;