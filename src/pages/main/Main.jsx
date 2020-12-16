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
  favorites: {},
  setFavorites: () => {},
  removeFavorites: () => {},
});
export const FavoriteCountriesProvider = FavoriteCountriesContext.Provider;
export const FavoriteCountriesConsumer = FavoriteCountriesContext.Consumer;

const contextValue = {
  favorites: {},
  setFavorites: (country) => {
    const id = country.alpha3Code;
    contextValue.favorites[id] = country;
  },
  removeFavorites: (country) => {
    const id = country.alpha3Code;
    delete contextValue.favorites[id];
  },
};

function Main() {
  const [countries, setCountries] = useState({});

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(utils.normalizeDataByField(result, 'alpha3Code'));
      });
  }

  useEffect(() => {
    if (Object.keys(countries).length === 0) gettingCountries();
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
          <Route path="/favorites" component={FavoriteCountries} />
        </FavoriteCountriesProvider>
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
