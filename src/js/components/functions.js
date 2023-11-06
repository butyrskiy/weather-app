/* eslint-disable import/no-cycle */
import {
  infoBtn, infoDiv, infoTopDiv, infoBottomDiv, infoStartMessage, weatherImgEl, imgUrl,
} from './constants';
import { cityArr } from './getCityInfo';
import { addFavoriteCity, favoriteCitiesSet } from './renderFavoriteCities';
import { storage } from './localStorage';

function searchCityIndex(name, source) {
  if (typeof (source) === 'object') {
    const res = [...source];
    return res.findIndex(item => item.name === name);
  }
  return source.findIndex(item => item.name === name);
}

function checkCopy(city) {
  let res = true;
  favoriteCitiesSet.forEach(item => {
    if (item.name === city.name) {
      res = false;
    }
  });

  return res;
}

function searchFavoriteCity() {
  const res = cityArr[cityArr.length - 1];

  if (checkCopy(res)) {
    addFavoriteCity(res);
  }
}

function updateFavorityCitiesInSorage(data) {
  storage.setFavoriteCities([...data]);
}

function firstLetterToUpperCase(str) {
  const strToArr = str.split(' ');
  const res = strToArr.map(el => {
    const firstLetter = el[0].toUpperCase();
    return firstLetter + el.slice(1);
  });

  return res.join(' ');
}

function showCityDisplay() {
  infoBtn.classList.remove('is-hidden');
  infoDiv.classList.remove('info--start');
  infoTopDiv.classList.remove('is-hidden');
  infoBottomDiv.classList.remove('is-hidden');
  infoStartMessage.remove();
}

function setUrlFromWeatherIcon(iconId) {
  weatherImgEl.setAttribute('src', `${imgUrl}/${iconId}@2x.png`);
}

export {
  // eslint-disable-next-line max-len
  searchCityIndex, firstLetterToUpperCase, showCityDisplay, setUrlFromWeatherIcon, searchFavoriteCity, updateFavorityCitiesInSorage,
};