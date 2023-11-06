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
const moreInfoBtn = document.querySelector('.info__btn');
const moreInfoEl = document.querySelector('.more-info');
const moreInfoCloseBtn = document.querySelector('.more-info-close__btn');
const infoDateEl = document.querySelector('.info__date');
const infoDayEl = document.querySelector('.info__day');
const weatherImgEl = document.querySelector('.info__img');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const imgUrl = 'https://openweathermap.org/img/wn/';

export {
  // eslint-disable-next-line max-len
  form, input, serverUrl, apiKey, tempValue, cityValue, favoritBtn, favoriteList, locationsPrev, descriptionEl, feelsLikeEl, infoBtn, infoDiv, infoTopDiv, infoBottomDiv, infoStartMessage, moreInfoBtn, moreInfoEl, moreInfoCloseBtn, infoDateEl, infoDayEl, weatherImgEl, imgUrl,
};