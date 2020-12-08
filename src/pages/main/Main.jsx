import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router';
import CountryInfo from './components/CountryInfo';
import CountryList from './components/CountryList';

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
    <Switch>
      <Route exact path="/" render={() => <CountryList countries={countries} />} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Route path="/country/:alpha3Code" render={({ match }) => <CountryInfo countries={countries} match={match} />} />
    </Switch>
  );
}

export default Main;
