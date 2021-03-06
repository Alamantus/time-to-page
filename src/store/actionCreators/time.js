import {
  UPDATE_LISTENED_SECONDS,
  UPDATE_LISTENED_MINUTES,
  UPDATE_LISTENED_HOURS,
  UPDATE_LISTENED_PERCENT,
  UPDATE_LISTENED_TIME,
  UPDATE_TOTAL_SECONDS,
  UPDATE_TOTAL_MINUTES,
  UPDATE_TOTAL_HOURS,
  UPDATE_TOTAL_TIME,
  UPDATE_INTRO_SECONDS,
  UPDATE_INTRO_MINUTES,
  UPDATE_INTRO_TIME,
  UPDATE_OUTRO_SECONDS,
  UPDATE_OUTRO_MINUTES,
  UPDATE_OUTRO_TIME,
} from '../actions/time';

export const updateListenedSeconds = seconds => ({
  type: UPDATE_LISTENED_SECONDS,
  seconds: parseInt(seconds),
});

export const updateListenedMinutes = minutes => ({
  type: UPDATE_LISTENED_MINUTES,
  minutes: parseInt(minutes),
});

export const updateListenedHours = hours => ({
  type: UPDATE_LISTENED_HOURS,
  hours: parseInt(hours),
});

export const updateListenedPercent = percent => ({
  type: UPDATE_LISTENED_PERCENT,
  percent: percent,
});

export const updateListenedTime = time => ({
  type: UPDATE_LISTENED_TIME,
  time,
});

export const updateTotalSeconds = seconds => ({
  type: UPDATE_TOTAL_SECONDS,
  seconds: parseInt(seconds),
});

export const updateTotalMinutes = minutes => ({
  type: UPDATE_TOTAL_MINUTES,
  minutes: parseInt(minutes),
});

export const updateTotalHours = hours => ({
  type: UPDATE_TOTAL_HOURS,
  hours: parseInt(hours),
});

export const updateTotalTime = time => ({
  type: UPDATE_TOTAL_TIME,
  time,
});

export const updateIntroSeconds = seconds => ({
  type: UPDATE_INTRO_SECONDS,
  seconds: parseInt(seconds),
});

export const updateIntroMinutes = minutes => ({
  type: UPDATE_INTRO_MINUTES,
  minutes: parseInt(minutes),
});

export const updateIntroTime = time => ({
  type: UPDATE_INTRO_TIME,
  time,
});

export const updateOutroSeconds = seconds => ({
  type: UPDATE_OUTRO_SECONDS,
  seconds: parseInt(seconds),
});

export const updateOutroMinutes = minutes => ({
  type: UPDATE_OUTRO_MINUTES,
  minutes: parseInt(minutes),
});

export const updateOutroTime = time => ({
  type: UPDATE_OUTRO_TIME,
  time,
});