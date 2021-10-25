import { APPLY_DATA } from './weather.actions';

const initislState = {
  weatherData: null,
};

const weatherReducer = (state = initislState, action) => {
  switch (action.type) {
    case APPLY_DATA:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };

    default:
      return state;
  }
};

export default weatherReducer;
