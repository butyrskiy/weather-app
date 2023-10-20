import { form, favoritBtn, favoriteList } from "./components/constants";
import { getCityName } from "./components/getCityInfo";
import { addFavoriteCity, removeFavoriteCity, chooseCity } from "./components/dom";

const cityArr = [];

form.addEventListener('submit', getCityName);
favoritBtn.addEventListener('click', addFavoriteCity);
favoriteList.addEventListener('click', removeFavoriteCity);
favoriteList.addEventListener('click', chooseCity);

export { cityArr };