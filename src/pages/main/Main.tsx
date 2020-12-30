import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components';
import { CountryInfo, CountryList, FavoriteCountries } from './components';
import { ICountryObj } from './interfaces/ICountryObj';

const utils = require('utils/Utils');

const API_URL = 'https://restcountries.eu/rest/v2/all';

const LayoutInherited = styled(Layout)`
  flex-direction: column;
`;

interface IFavorites {
  [key: string]: any
}

interface IFavoriteCountriesContext {
  favorites: IFavorites,
  setFavorites: (countryId: string) => void,
  removeFavorites: (country: ICountryObj) => void,
}

const contextValue: IFavoriteCountriesContext = {
  favorites: {},
  setFavorites: (countryId: string) => {
    contextValue.favorites[countryId] = true;
  },
  removeFavorites: (country: ICountryObj) => {
    const id = country.alpha3Code;
    delete contextValue.favorites[id];
  },
};

export const FavoriteCountriesContext = React.createContext<IFavoriteCountriesContext>(contextValue);
export const FavoriteCountriesProvider = FavoriteCountriesContext.Provider;

function Main() {
  const [countries, setCountries] = useState<ICountryObj | {}>({});

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
          <Route path="/favorites" component={FavoriteCountries} />
        </FavoriteCountriesProvider>
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
