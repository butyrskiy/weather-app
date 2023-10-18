import { tempValue, cityValue } from "./constants";

function setWeatherInfo(data) {
  const cityName = data.name;
  const {temp} = data.main;

  const tempFahrenheit = (temp - 273.5).toFixed(1);

  tempValue.textContent = `${tempFahrenheit} °C`;
  cityValue.textContent = cityName;
}

export { setWeatherInfo };