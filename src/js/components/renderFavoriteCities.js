/* eslint-disable import/no-cycle */
import { storage } from './localStorage';
import * as constants from './constants';
import { searchCityIndex } from './functions';
import { renderCity } from './renderCity';

const favoriteCitiesSet = new Set();

function addFavoriteCity(city) {
  const favoriteCityHTML = `
    <li class="locations__item">
      <button class="locations__btn btn-reset">${city.name}</button>
      <button class="locations__remove-btn btn-reset">
        <img
          src="img/icons/cross.png"
          alt=""
          class="locations__remove-img"
        />
      </button>
    </li>
    `;

  constants.locationsPrev.remove();
  constants.favoriteList.insertAdjacentHTML('afterbegin', favoriteCityHTML);

  favoriteCitiesSet.add(city);
  storage.setFavoriteCities([...favoriteCitiesSet]);
}

function renderFavoriteCitiesInStorage() {
  const data = storage.getFavoriteCities();
  data.forEach(city => {
    addFavoriteCity(city);
  });
}

function chooseFavoriteCity(e) {
  if (e.target.className === 'locations__btn btn-reset') {
    const data = storage.getFavoriteCities();
    const name = e.target.textContent;

    const res = searchCityIndex(name, data);
    renderCity([...favoriteCitiesSet][res]);
  }
}

export {
  addFavoriteCity, renderFavoriteCitiesInStorage, favoriteCitiesSet, chooseFavoriteCity,
};