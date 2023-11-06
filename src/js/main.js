import {
  form, favoritBtn, favoriteList, moreInfoBtn, moreInfoCloseBtn,
} from './components/constants';
import { getCityName } from './components/fetchData';
import { chooseFavoriteCity } from './components/renderFavoriteCities';
import { searchFavoriteCity } from './components/functions';
import { removeFavoriteCity } from './components/removeCity';
import { getMoreInfo } from './components/moreInfo';
import { startApp } from './components/startApp';

form.addEventListener('submit', getCityName);
favoritBtn.addEventListener('click', searchFavoriteCity);
favoriteList.addEventListener('click', removeFavoriteCity);
favoriteList.addEventListener('click', chooseFavoriteCity);
moreInfoBtn.addEventListener('click', getMoreInfo);
moreInfoCloseBtn.addEventListener('click', getMoreInfo);

startApp();