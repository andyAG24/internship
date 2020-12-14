import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components';
import { CountryInfo, CountryList } from './components';

const API_URL = 'https://restcountries.eu/rest/v2/all';

const LayoutInherited = styled(Layout)`
  flex-direction: column;
`;

function Main() {
  const [countries, setCountries] = useState([]);

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }

  useEffect(() => {
    if (countries.length === 0) gettingCountries();
  });

  return (
    <LayoutInherited>
      <nav>
        <Link to="/">Список стран</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <CountryList countries={countries} />} />
        <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
      </Switch>
    </LayoutInherited>
  );
}

export default Main;
