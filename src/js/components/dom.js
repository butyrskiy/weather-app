/* eslint-disable import/no-cycle */
import * as constants from "./constants";
import { cityArr } from "../main";
import { searchCityIndex, firstLetterToUpperCase, startSearchCity, setUrlFromWeatherIcon } from "./functions";
import { getDate } from "./date";

function setWeatherInfo(data) {
  const cityName = data.name;
  const {temp} = data.main;
  const feelsLike = data.main.feels_like;
  const {description} = data.weather[0];
  const {sunrise} = data.sys;
  const {sunset} = data.sys;
  const date = data.dt;
  const {timezone} = data;
  const {icon} = data.weather[0];

  const tempFahrenheit = (temp - 273.5).toFixed(1);
  const feelsLikeFahrenheit = (feelsLike - 273.5).toFixed(1);

  startSearchCity();
  setUrlFromWeatherIcon(icon);

  constants.cityValue.textContent = cityName;
  constants.tempValue.textContent = `${tempFahrenheit} °C`;
  constants.feelsLikeEl.textContent = `Feels like: ${feelsLikeFahrenheit} °C`;
  constants.descriptionEl.textContent = firstLetterToUpperCase(description);
  constants.infoDateEl.textContent = `${getDate(date).day} ${getDate(date).month} ${getDate(date).year}`;
  constants.infoDayEl.textContent = `${getDate(date).nameDay}`;


  cityArr.push({
    cityName,
    temp,
    description,
    feelsLike,
    sunrise,
    sunset,
    timezone,
    date,
    icon,
    isFavorite: false,
  });
}

function addFavoriteCity() {
  const {cityName} = cityArr[cityArr.length - 1];
  const res = searchCityIndex(cityName);

  const {isFavorite} = cityArr[res];
  cityArr[res].isFavorite = true;

  if(cityArr.length < 1 || isFavorite) {
    console.error('Choose city or it was added');
  } else {
    const favoriteCityHTML = `
    <li class="locations__item">
      <button class="locations__btn btn-reset">${cityName}</button>
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
  }
}

function removeFavoriteCity(e) {
  if(e.target.className === 'locations__remove-img') {
    const elem = e.target;
    const box = elem.closest('.locations__item');
    const parent = elem.parentElement;
    const sibling = parent.previousElementSibling;
    const favoriteCityName = sibling.textContent;

    const cityIndex = searchCityIndex(favoriteCityName);
    box.remove();
    cityArr.splice(cityIndex, 1);
  }
}

function chooseCity(e) {
  if (e.target.className === 'locations__btn btn-reset') {
    const elem = e.target.textContent;
    const cityIndex = searchCityIndex(elem);
    const tempFahrenheit = (cityArr[cityIndex].temp - 273.5).toFixed(1);
    const description = firstLetterToUpperCase(cityArr[cityIndex].description);
    const feelsLikeFahrenheit = (cityArr[cityIndex].feelsLike - 273.5).toFixed(1);

    constants.tempValue.textContent = `${tempFahrenheit} °C`;
    constants.cityValue.textContent = cityArr[cityIndex].cityName;
    constants.descriptionEl.textContent = description;
    constants.feelsLikeEl.textContent = `Feels like: ${feelsLikeFahrenheit} °C`;

    setUrlFromWeatherIcon(cityArr[cityIndex].icon);
  }
}

export { setWeatherInfo, addFavoriteCity, removeFavoriteCity, chooseCity };