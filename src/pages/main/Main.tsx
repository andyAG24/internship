import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'store/reducers';
import { CountryInfo, CountryList, FavoriteCountries } from './components';
import { ICountryObj } from './interfaces/ICountryObj';

const utils = require('utils/Utils');

const API_URL = 'https://restcountries.eu/rest/v2/all';

const store = createStore(rootReducer);

const LayoutInherited = styled(Layout)`
  flex-direction: column;
`;

const PageNavi = styled.nav`
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    margin: 10px;
  }
`;

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
      <PageNavi>
        <Link to="/">Список стран</Link>
        <Link to="/favorites">Избранное</Link>
      </PageNavi>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" render={() => <CountryList countries={countries} />} />
          <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
          <Route path="/favorites" render={() => <FavoriteCountries countries={countries} />} />
        </Provider>
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
