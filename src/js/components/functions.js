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

export { searchCityIndex, searchCity, firstLetterToUpperCase };