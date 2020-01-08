import { CHECK_TIME } from '../actions/time';

const defaultState = {
  currentTime: new Date(),
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_TIME: return Object.assign({}, state, { currentTime: action.time });
    default: return state;
  }
}

export default reducer;