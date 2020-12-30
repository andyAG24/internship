import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';

const CountryItemWrapper = styled.li`
  list-style: none;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;

const CountryFlag = styled.img`
  width: 30px;
  height: 20px;
`;

const CountryName = styled.span`
  font-size: .9em;
  margin-left: 5px;
`;

type CountryItemTypes = {
  name: string,
  flag: string,
  alpha3Code: string
};

function CountryItem({
  name,
  flag,
  alpha3Code,
}: CountryItemTypes) {
  return (
    <CountryItemWrapper key={name}>
      <CountryFlag src={flag} alt="Country flag" />
      <CountryName>
        <Link to={`/country/${alpha3Code}`}>{name}</Link>
      </CountryName>
    </CountryItemWrapper>
  );
}

export default CountryItem;
