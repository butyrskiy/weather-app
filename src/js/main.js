/* eslint-disable import/no-cycle */
import { form, favoritBtn, favoriteList, moreInfoBtn, moreInfoCloseBtn } from "./components/constants";
import { getCityName } from "./components/getCityInfo";
import { addFavoriteCity, removeFavoriteCity, chooseCity } from "./components/dom";
import { getMoreInfo } from "./components/more-info";

const cityArr = [];

form.addEventListener('submit', getCityName);
favoritBtn.addEventListener('click', addFavoriteCity);
favoriteList.addEventListener('click', removeFavoriteCity);
favoriteList.addEventListener('click', chooseCity);
moreInfoBtn.addEventListener('click', getMoreInfo);
moreInfoCloseBtn.addEventListener('click', getMoreInfo);

export { cityArr };