const form = document.querySelector('.locations__form');
const input = document.querySelector('.locations__input');
const tempValue = document.querySelector('.info__temp');
const cityValue = document.querySelector('.info__name');
const favoritBtn = document.querySelector('.info__favorit-img');
const favoriteList = document.querySelector('.locations__list');
const locationsPrev = document.querySelector('.locations__prev');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

export { form, input, serverUrl, apiKey, tempValue, cityValue, favoritBtn, favoriteList, locationsPrev };