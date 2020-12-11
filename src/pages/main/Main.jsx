import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import { Layout } from 'components';
import { CountryInfo, CountryList } from './components';

const API_URL = 'https://restcountries.eu/rest/v2/all';

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
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <CountryList countries={countries} />} />
        <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
      </Switch>
    </Layout>
  );
}

export default Main;
