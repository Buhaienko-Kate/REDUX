import { getWeather } from './weather.getway';

export const APPLY_DATA = 'WEATHER/APPLY_DATA';

export const applyWeatherData = weatherData => {
  return {
    type: APPLY_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch, getState) {
    getWeather().then(weatherData => {
      dispatch(applyWeatherData(weatherData));
    });
  };
};
