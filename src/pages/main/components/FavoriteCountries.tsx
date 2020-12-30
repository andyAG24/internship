/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FavoriteCountriesContext } from '../Main';

function FavoriteCountries() {
  const context = useContext(FavoriteCountriesContext);

  return (
    <button type="submit" onClick={() => console.log(context)}>click</button>
  );
}

export default FavoriteCountries;
