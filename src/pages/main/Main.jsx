import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components';
import { CountryInfo, CountryList, FavoriteCountries } from './components';

const utils = require('utils/Utils');

const API_URL = 'https://restcountries.eu/rest/v2/all';

const LayoutInherited = styled(Layout)`
  flex-direction: column;
`;

export const FavoriteCountriesContext = React.createContext({
  favorites: new Set(),
  setFavorites: () => {},
  removeFavorites: () => {},
});
export const FavoriteCountriesProvider = FavoriteCountriesContext.Provider;
export const FavoriteCountriesConsumer = FavoriteCountriesContext.Consumer;

const contextValue = {
  favorites: new Set(),
  setFavorites: (countryId) => {
    contextValue.favorites.add(countryId);
  },
  removeFavorites: (countryId) => {
    contextValue.favorites.delete(countryId);
  },
};

function Main() {
  const [countries, setCountries] = useState({});

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(utils.normalizeCountriesByField(result, 'alpha3Code'));
      });
  }

  useEffect(() => {
    if (Object.keys(countries).length === 0) {
      gettingCountries();
    }
  });

  return (
    <LayoutInherited>
      <nav>
        <Link to="/">Список стран</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>
      <Switch>
        <FavoriteCountriesProvider value={contextValue}>
          <Route exact path="/" render={() => <CountryList countries={countries} />} />
          <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
          <Route path="/favorites" render={() => <FavoriteCountries countries={countries} />} />
        </FavoriteCountriesProvider>
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
