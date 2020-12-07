/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const API_URL = 'https://restcountries.eu/rest/v2/all';

function CountryInfo({ match }) {
  const {
    params: { alpha3Code },
  } = match;
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }

  function findCountry() {
    setCountry(countries.find((item) => item.alpha3Code === alpha3Code));
  }

  useEffect(() => {
    if (countries.length === 0) gettingCountries();
    if (countries.length !== 0) findCountry();
  });

  function renderCountryInfo() {
    // const keys = () => Object.keys(country).map((key, value) => (
    //   <div key={key}>{`${value + 1}: ${key}: ${country[key]}`}</div>
    // ));
    return (
      <>
        <h1>{country.name}</h1>
        <span>{country.nativeName}</span>
      </>
    );
  }

  return (
    <>
      { country && renderCountryInfo() }
    </>
  );
}

CountryInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any, // Временное решение
};

CountryInfo.defaultProps = {
  match: undefined,
};

export default CountryInfo;
