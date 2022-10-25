const BASE_URL = 'https://restcountries.com/v3.1/';

export default function fetchCountries(countryName) {
  return fetch(
    `${BASE_URL}name/${countryName}?fields=name,capital,population,flags,languages `
  ).then(r => r.json());
}
