import {
  UPDATE_INTRO_SECONDS,
  UPDATE_INTRO_MINUTES,
  UPDATE_INTRO_TIME,
} from '../../actions/time';

const defaultState = {
  seconds: 0,
  minutes: 0,
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_INTRO_SECONDS: {
      newState.seconds = action.seconds;
      return newState;
    }
    case UPDATE_INTRO_MINUTES: {
      newState.minutes = action.minutes;
      return newState;
    }
    case UPDATE_INTRO_TIME: {
      newState.minutes = action.time.minutes;
      newState.seconds = action.time.seconds;
      return newState;
    }
    default: return state;
  }
}

export default reducer;