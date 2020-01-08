import {
  UPDATE_READ_PAGES,
  UPDATE_TOTAL_PAGES,
  UPDATE_START_PAGES
} from '../actions/pages';

export const updateReadPages = pages => ({
  type: UPDATE_READ_PAGES,
  pages,
});

export const updateTotalPages = pages => ({
  type: UPDATE_TOTAL_PAGES,
  pages,
});

export const updateStartPages = pages => ({
  type: UPDATE_START_PAGES,
  pages,
});