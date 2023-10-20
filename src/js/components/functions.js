import { cityArr } from "../main";

function searchCityIndex(name) {
  return cityArr.findIndex(item => item.cityName === name);
}

function searchCity(name) {
  const res = cityArr.find(item => item.cityName === name);
  return res;
}

export { searchCityIndex, searchCity };