import {
  UPDATE_LISTENED_SECONDS,
  UPDATE_LISTENED_MINUTES,
  UPDATE_LISTENED_HOURS,
  UPDATE_LISTENED_PERCENT
} from '../../actions/time';

const defaultState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  percent: 0.00,
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_LISTENED_SECONDS: {
      newState.seconds = action.seconds;
      return newState;
    }
    case UPDATE_LISTENED_MINUTES: {
      newState.minutes = action.minutes;
      return newState;
    }
    case UPDATE_LISTENED_HOURS: {
      newState.hours = action.hours;
      return newState;
    }
    case UPDATE_LISTENED_PERCENT: {
      newState.percent = action.percent;
      return newState;
    }
    default: return state;
  }
}

export default reducer;