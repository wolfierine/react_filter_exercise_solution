import * as types from '../types/people';

export const filterWord = (letter, backspace) => ({
  type: types.FILTER_WORD,
  letter,
  backspace
});

export const checkKey = (key) => ({
  type: types.CHECK_KEY,
  key
});
