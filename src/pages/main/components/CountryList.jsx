import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountryItem from './CountryItem.jsx';

const API_URL = 'https://restcountries.eu/rest/v2/all';

const CountryListBlock = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function CountryList() {
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

  function onCountryClick() {
  }

  function renderCountries() {
    return countries.map((item) => (
      <CountryItem
        name={item.name}
        key={item.name}
        flag={item.flag}
        onClick={onCountryClick(item)}
      />
    ));
  }

  return (
    <CountryListBlock>
      { countries && renderCountries() }
    </CountryListBlock>
  );
}

export default CountryList;
