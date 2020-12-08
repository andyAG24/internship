// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

const CountryListBlock = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function CountryList({
  countries,
}) {
  function renderCountries() {
    return countries.map((item) => (
      <CountryItem
        name={item.name}
        key={item.name}
        flag={item.flag}
        alpha3Code={item.alpha3Code}
      />
    ));
  }

  return (
    <CountryListBlock>
      { countries && renderCountries() }
    </CountryListBlock>
  );
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.any),
};

CountryList.defaultProps = {
  countries: [],
};

export default CountryList;
