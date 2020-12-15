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
    return Object.keys(countries).map((item) => (
      <CountryItem
        name={countries[item].name}
        key={countries[item].name}
        flag={countries[item].flag}
        alpha3Code={countries[item].alpha3Code}
      />
    ));
  }

  return (
    <CountryListBlock>
      { Object.keys(countries).length !== 0 && renderCountries() }
    </CountryListBlock>
  );
}

CountryList.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

CountryList.defaultProps = {
  countries: {},
};

export default CountryList;
