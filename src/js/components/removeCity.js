import { favoriteCitiesSet } from './renderFavoriteCities';
import { updateFavorityCitiesInSorage } from './functions';

function removeFavoriteCity(e) {
  if (e.target.className === 'locations__remove-img') {
    const elem = e.target;
    const box = elem.closest('.locations__item');
    const parent = elem.parentElement;
    const sibling = parent.previousElementSibling;
    const favoriteCityName = sibling.textContent;

    box.remove();

    favoriteCitiesSet.forEach(city => {
      if (city.name === favoriteCityName) {
        favoriteCitiesSet.delete(city);
      }
    });

    updateFavorityCitiesInSorage(favoriteCitiesSet);
  }
}

export { removeFavoriteCity };