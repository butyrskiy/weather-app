import { moreInfoEl, infoObj } from './constants';
import { favoriteCitiesSet } from './renderFavoriteCities';
import { searchCityIndex } from './functions';
import { convertTime } from './date';

function setMoreInfo(data) {
  const {
    visibility, sys: { sunrise, sunset }, main: { humidity, pressure }, wind: { speed },
  } = data;

  infoObj.sunriseEl.textContent = convertTime.sunriseTime(sunrise);
  infoObj.sunsetEl.textContent = convertTime.sunsetTime(sunset);
  infoObj.pressureEl.textContent = `${pressure} hPa`;
  infoObj.humidityEl.textContent = `${humidity} %`;
  infoObj.visibilityEl.textContent = `${visibility} m`;
  infoObj.windEl.textContent = `${speed} m/s`;
}

function getMoreInfo(e) {
  moreInfoEl.classList.toggle('is-hidden');

  if (e.target.className === 'info__btn btn-reset') {
    const elem = e.target;
    const parent = elem.parentElement;
    const sibling = parent.previousElementSibling;
    const cityNameEl = sibling.firstElementChild;
    const cityName = cityNameEl.textContent;

    const res = searchCityIndex(cityName, favoriteCitiesSet);
    const data = [...favoriteCitiesSet][res];
    setMoreInfo(data);
  }
}

export { getMoreInfo };