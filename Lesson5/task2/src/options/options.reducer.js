import { TOGGLE_OPTION } from './optios.actions';

const options = {
  'id-0': {
    id: 'id-0',
    name: '19-inch wheels',
  },
  'id-1': {
    id: 'id-1',
    name: 'Leather-trimmed Sport Seats',
  },
  'id-2': {
    id: 'id-2',
    name: 'B&O Sound System',
  },
  'id-3': {
    id: 'id-3',
    name: 'Adaptive Cruise Control',
  },
  'id-4': {
    id: 'id-4',
    name: 'Daytime running lights',
  },
  'id-5': {
    id: 'id-5',
    name: 'Auto High-Beam Headlamps',
  },
  'id-6': {
    id: 'id-6',
    name: 'Carbon Sport Interior',
  },
};
const initislState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initislState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelectedIds = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : state.selected.concat(optionId);
      return {
        ...state,
        selected: newSelectedIds,
      };
    }

    default:
      return state;
  }
};

export default optionsReducer;
