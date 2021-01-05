import React from 'react';
import { useStore } from 'react-redux';
import Countries from './Countries';
import { ICountryObj } from '../interfaces/ICountryObj';

type FavoriteCountriesTypes = {
  countries: {[index: string]: ICountryObj}
};

function FavoriteCountries({ countries }: FavoriteCountriesTypes) {
  const store = useStore();

  function getFavoriteCountriesObject() {
    const allCountries = store.getState().favoriteCountries;
    const filtered: {[key: string]: ICountryObj} = {};
    Object.keys(allCountries).forEach((item: string) => {
      if (allCountries[item]) {
        filtered[item] = countries[item];
      }
    });
    return filtered;
  }

  return (
    <Countries countries={getFavoriteCountriesObject()} />
  );
}

export default FavoriteCountries;
