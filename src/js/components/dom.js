import { tempValue, cityValue, favoriteList, locationsPrev, descriptionEl } from "./constants";
import { cityArr } from "../main";
import { searchCityIndex, firstLetterToUpperCase } from "./functions";

function setWeatherInfo(data) {
  const cityName = data.name;
  const {temp} = data.main;
  const {description} = data.weather[0];

  const tempFahrenheit = (temp - 273.5).toFixed(1);

  tempValue.textContent = `${tempFahrenheit} °C`;
  cityValue.textContent = cityName;
  descriptionEl.textContent = firstLetterToUpperCase(description);

  cityArr.push({
    cityName,
    temp,
    description,
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
    locationsPrev.remove();
    favoriteList.insertAdjacentHTML('afterbegin', favoriteCityHTML);
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
    
    tempValue.textContent = `${tempFahrenheit} °C`;
    cityValue.textContent = cityArr[cityIndex].cityName;
  }
}

export { setWeatherInfo, addFavoriteCity, removeFavoriteCity, chooseCity };