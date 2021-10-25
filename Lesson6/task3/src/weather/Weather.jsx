import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = ({ weatherData, getWeatherData }) => {
  // console.log(weatherData);
  useEffect(() => {
    getWeatherData();
  }, []);

  if (!weatherData) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{`${city.temperature}F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

Weather.propTypes = {
  weatherData: PropTypes.array,
  getWeatherData: PropTypes.func.isRequired,
};

Weather.defaultValue = {
  weatherData: null,
};

export default connect(mapState, mapDispatch)(Weather);
