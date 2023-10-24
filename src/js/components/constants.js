const form = document.querySelector('.locations__form');
const input = document.querySelector('.locations__input');
const tempValue = document.querySelector('.info__temp');
const cityValue = document.querySelector('.info__name');
const favoritBtn = document.querySelector('.info__favorit-img');
const favoriteList = document.querySelector('.locations__list');
const locationsPrev = document.querySelector('.locations__prev');
const descriptionEl = document.querySelector('.info__status');
const feelsLikeEl = document.querySelector('.info__feels-like');
const infoBtn = document.querySelector('.info__btn');
const infoDiv = document.querySelector('.info');
const infoTopDiv = document.querySelector('.info__top');
const infoBottomDiv = document.querySelector('.info__bottom');
const infoStartMessage = document.querySelector('.info__start-message');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

export { form, input, serverUrl, apiKey, tempValue, cityValue, favoritBtn, favoriteList, locationsPrev, descriptionEl, feelsLikeEl, infoBtn, infoDiv, infoTopDiv, infoBottomDiv, infoStartMessage };