/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FavoriteCountriesContext, FavoriteCountriesConsumer } from '../Main';

// const state = useContext(FavoriteCountriesContext);

function addToFavorite(context) {
  console.log(context);
}

function FavoriteCountries() {
  return (
    <FavoriteCountriesConsumer>
      {(context) => addToFavorite(context)}
    </FavoriteCountriesConsumer>
  );
}

export default FavoriteCountries;
