/* eslint-disable import/no-cycle */
import { input, serverUrl, apiKey } from './constants';
import { renderCity } from './renderCity';

const cityArr = [];

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function getCityInfo(url) {
  try {
    const data = await fetchData(url);
    renderCity(data);
  } catch (error) {
    console.log(error);
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