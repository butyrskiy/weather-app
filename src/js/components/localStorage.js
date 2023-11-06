const storage = {
  checkCurrentCityInStorage() {
    return !!localStorage.getItem('current city');
  },

  checkFavoriteCitiesInStorage() {
    return !!localStorage.getItem('favorite cities');
  },

  setCurrentCity(data) {
    const currentCityData = JSON.stringify(data);
    localStorage.setItem('current city', currentCityData);
  },

  setFavoriteCities(data) {
    const favoriteCitiesData = JSON.stringify(data);
    localStorage.setItem('favorite cities', favoriteCitiesData);
  },

  getCityInStorage() {
    const res = JSON.parse(localStorage.getItem('current city'));
    return res;
  },

  getFavoriteCities() {
    const res = JSON.parse(localStorage.getItem('favorite cities'));
    return res;
  },
};

export { storage };