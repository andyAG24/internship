import React, { useEffect, useState, createContext } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components';
import { CountryInfo, CountryList, FavoriteCountries } from './components';

const API_URL = 'https://restcountries.eu/rest/v2/all';

const LayoutInherited = styled(Layout)`
  flex-direction: column;
`;

// Не понимаю, функцию надо здесь определять и как-то вызывать в дочерних элементах,
// или ее вынести в FavoriteCountries и потом как-то вызывать
export const FavoriteCountriesContext = createContext({
  favCountries: [],
  addCountry: (countryName) => {
    this.favCountries.add(countryName);
    console.log(countryName);
  },
});
export const FavoriteCountriesProvider = FavoriteCountriesContext.Provider;
export const FavoriteCountriesConsumer = FavoriteCountriesContext.Consumer;

function Main() {
  const [countries, setCountries] = useState({});

  function assignBy(key) {
    return (data, item) => {
      const result = { ...data };
      result[item[key]] = item;
      result[item[key]].isFavorite = false;
      return result;
    };
  }

  function normalizeCountries(data) {
    return data.reduce(assignBy('alpha3Code'), {});
  }

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(normalizeCountries(result));
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
        <FavoriteCountriesProvider value={['USA', 'Russia']}>
          <Route exact path="/" render={() => <CountryList countries={countries} />} />
          <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
          <Route path="/favorites" component={FavoriteCountries} />
        </FavoriteCountriesProvider>
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
