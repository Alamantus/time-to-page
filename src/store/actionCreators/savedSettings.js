import {
  UPDATE_AVAILABLE_SAVES,
  ADD_SAVE,
  EDIT_SAVE,
  REMOVE_SAVE,
} from '../actions/savedSettings';

export const updateAvailableSaves = storedSaves => ({
  type: UPDATE_AVAILABLE_SAVES,
  settings: storedSaves,
});

export const addSave = settings => ({
  type: ADD_SAVE,
  settings,
});

export const editSave = (settings, index) => ({
  type: EDIT_SAVE,
  settings,
  index,
});

export const removeSave = index => ({
  type: REMOVE_SAVE,
  index,
});