import {
  UPDATE_TOTAL_SECONDS,
  UPDATE_TOTAL_MINUTES,
  UPDATE_TOTAL_HOURS,
  UPDATE_TOTAL_TIME,
} from '../../actions/time';

const defaultState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_TOTAL_SECONDS: {
      newState.seconds = action.seconds;
      return newState;
    }
    case UPDATE_TOTAL_MINUTES: {
      newState.minutes = action.minutes;
      return newState;
    }
    case UPDATE_TOTAL_HOURS: {
      newState.hours = action.hours;
      return newState;
    }
    case UPDATE_TOTAL_TIME: {
      newState.hours = action.time.hours;
      newState.minutes = action.time.minutes;
      newState.seconds = action.time.seconds;
      return newState;
    }
    default: return state;
  }
}

export default reducer;