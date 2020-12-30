import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Countries from './Countries';
import { FavoriteCountriesContext } from '../Main';
import { ICountryObj } from '../interfaces/ICountryObj';

type FavoriteCountriesTypes = {
  countries: {[index: string]: ICountryObj}
};

function FavoriteCountries({ countries }: FavoriteCountriesTypes) {
  const context = useContext(FavoriteCountriesContext);

  function getFavoriteCountriesObject() {
    const filtered: {[key: string]: ICountryObj} = {};
    Object.keys(context.favorites).forEach((item: string) => {
      filtered[item] = countries[item];
    });
    return filtered;
  }

  return (
    <Countries countries={getFavoriteCountriesObject()} />
  );
}

FavoriteCountries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

export default FavoriteCountries;
