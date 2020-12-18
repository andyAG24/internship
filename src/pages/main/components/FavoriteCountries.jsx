/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Countries from './Countries';
import { FavoriteCountriesContext } from '../Main';

function FavoriteCountries({ countries = {} }) {
  const context = useContext(FavoriteCountriesContext);

  function getFavoriteCountriesObject() {
    const filtered = {};
    context.favorites.forEach((item) => {
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
