// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Countries from './Countries';
import { ICountryObj } from '../interfaces/ICountryObj';

const CountryListBlock = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type CountryListTypes = {
  countries: {[index: string]: ICountryObj},
}

function CountryList({
  countries,
}: CountryListTypes) {
  return (
    <CountryListBlock>
      <Countries countries={countries} />
    </CountryListBlock>
  );
}

export default CountryList;
