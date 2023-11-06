/* eslint-disable import/no-cycle */
import * as constants from './constants';
import {
  firstLetterToUpperCase, showCityDisplay, setUrlFromWeatherIcon,
} from './functions';
import { getDate } from './date';
import { storage } from './localStorage';
import { cityArr } from './fetchData';

function renderCity(data) {
  const cityName = data.name;
  const temp = (data.main.temp - 273.5).toFixed(1);
  const feelsLike = (data.main.feels_like - 273.5).toFixed(1);
  const { description } = data.weather[0];
  const date = data.dt;
  const { icon } = data.weather[0];

  constants.cityValue.textContent = cityName;
  constants.tempValue.textContent = `${temp} °C`;
  constants.feelsLikeEl.textContent = `Feels like: ${feelsLike} °C`;
  constants.descriptionEl.textContent = firstLetterToUpperCase(description);
  constants.infoDateEl.textContent = `${getDate(date).day} ${getDate(date).month} ${getDate(date).year}`;
  constants.infoDayEl.textContent = `${getDate(date).nameDay}`;

  setUrlFromWeatherIcon(icon);
  showCityDisplay();

  storage.setCurrentCity(data);
  cityArr.push(data);
}

export { renderCity };