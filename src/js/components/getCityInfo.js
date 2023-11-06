/* eslint-disable import/no-cycle */
import { input, serverUrl, apiKey } from './constants';
import { renderCity } from './renderCity';

const cityArr = [];

function getCityInfo(url) {
  try {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        renderCity(data);
      })
      .catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  }
}

function getCityName(e) {
  e.preventDefault();
  const cityName = input.value;

  input.value = '';
  input.blur();

  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  getCityInfo(url);
}

export { getCityName, cityArr };