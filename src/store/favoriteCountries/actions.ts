import { ICountryObj } from 'pages/main/interfaces/ICountryObj';

export const ADD_FAVORITE_COUNTRY = 'ADD_FAVORITE_COUNTRY';
export const REMOVE_FAVORITE_COUNTRY = 'REMOVE_FAVORITE_COUNTRY';

export const addCountry = (country: ICountryObj) => ({
  type: ADD_FAVORITE_COUNTRY,
  payload: country,
});

export const removeCountry = (country: ICountryObj) => ({
  type: REMOVE_FAVORITE_COUNTRY,
  payload: country,
});
