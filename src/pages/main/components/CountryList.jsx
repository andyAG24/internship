import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Countries from './Countries';

const CountryListBlock = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function CountryList({
  countries,
}) {
  return (
    <CountryListBlock>
      <Countries countries={countries} />
    </CountryListBlock>
  );
}

CountryList.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CountryList;
