import { TOGGLE } from './language.actions.js';

export const languageReduser = (state = 'en', action) => {
  switch (action.type) {
    case TOGGLE:
      return action.payload.string;
    default:
      return state;
  }
};
