export const TOGGLE = 'TOGGLE_LANGUAGE';

export const setLanguage = string => {
  return {
    type: TOGGLE,
    payload: {
      string,
    },
  };
};
