import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return Object.values(state.options.optionsList);
};

export const selectedIdSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);

// export const selectedOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);

//   const selectedIds = selectedIdSelector(state);

//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

// export const availableOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);

//   const selectedIds = selectedIdSelector(state);

//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
