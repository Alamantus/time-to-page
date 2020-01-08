import { CHECK_TIME } from '../actions/time';

export const checkTime = () => ({
  type: CHECK_TIME,
  time: new Date(),
});