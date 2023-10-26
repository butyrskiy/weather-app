import { input, serverUrl, apiKey } from "./constants";
import { setWeatherInfo } from "./dom";

function getCityInfo(url) {
  try {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setWeatherInfo(data))
    .catch(err => console.log(err));
  } catch(err) {
    console.log(err);
  }
}

function getCityName(e) {
  e.preventDefault();
  const cityName = input.value;

  input.value = '';
  input.blur();

  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  getCityInfo(url);
}

export { getCityName };