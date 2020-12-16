import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

function CountryItem({
  name = undefined,
  flag = undefined,
  alpha3Code = undefined,
}) {
  return (
    <CountryItemWrapper key={name}>
      <CountryFlag src={flag} alt="Country flag" />
      <CountryName>
        <Link to={`/country/${alpha3Code}`}>{name}</Link>
      </CountryName>
    </CountryItemWrapper>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  alpha3Code: PropTypes.string.isRequired,
};

export default CountryItem;
