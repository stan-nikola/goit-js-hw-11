const BASE_URL = 'https://restcountries.com/v3.1/';

export default function fetchCountries(countryName) {
  return fetch(
    `${BASE_URL}name/${countryName}?fields=name,capital,population,flags,languages,maps`
  ).then(r => r.json());
}
