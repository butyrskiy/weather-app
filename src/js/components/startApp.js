/* eslint-disable import/no-cycle */
import { storage } from './localStorage';
import { renderCity } from './renderCity';
import { renderFavoriteCitiesInStorage } from './renderFavoriteCities';

function startApp() {
  if (storage.checkCurrentCityInStorage()) {
    const currentCity = storage.getCityInStorage();
    renderCity(currentCity);
  }

  if (storage.checkFavoriteCitiesInStorage()) {
    renderFavoriteCitiesInStorage();
  }
}

export { startApp };