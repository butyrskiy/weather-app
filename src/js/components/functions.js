import { infoBtn, infoDiv, infoTopDiv, infoBottomDiv, infoStartMessage } from "./constants";
import { cityArr } from "../main";

function searchCityIndex(name) {
  return cityArr.findIndex(item => item.cityName === name);
}

function searchCity(name) {
  const res = cityArr.find(item => item.cityName === name);
  return res;
}

function firstLetterToUpperCase(str) {
  const strToArr = str.split(' ');
  const res = strToArr.map(el => {
    const firstLetter = el[0].toUpperCase();
    return firstLetter + el.slice(1);
  });

  return res.join(' ');
}

function startSearchCity() {
  infoBtn.classList.remove('is-hidden');
  infoDiv.classList.remove('info--start');
  infoTopDiv.classList.remove('is-hidden');
  infoBottomDiv.classList.remove('is-hidden');
  infoStartMessage.remove();
}

export { searchCityIndex, searchCity, firstLetterToUpperCase, startSearchCity };