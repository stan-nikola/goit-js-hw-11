const BASE_URL = 'https://restcountries.com/v3.1/';

export default async function fetchCountries(countryName) {
  // return fetch(
  //   `${BASE_URL}name/${countryName}?fields=name,capital,population,flags,languages,maps,latlng,capitalInfo`
  // ).then(r => r.json());

  const response = await fetch(
    `${BASE_URL}name/${countryName}?fields=name,capital,population,flags,languages,maps,latlng,capitalInfo`
  );
  const data = await response.json();
  return data;
}
