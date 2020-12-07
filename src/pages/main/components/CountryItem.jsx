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
  name,
  flag,
  onClick,
  alpha3Code,
}) {
  return (
    <CountryItemWrapper key={name} onClick={onClick}>
      <CountryFlag src={flag} alt="Country flag" />
      <CountryName>
        <Link to={`/country/${alpha3Code}`}>{name}</Link>
      </CountryName>
    </CountryItemWrapper>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  onClick: PropTypes.func,
  alpha3Code: PropTypes.string,
};

CountryItem.defaultProps = {
  name: undefined,
  flag: undefined,
  onClick: undefined,
  alpha3Code: undefined,
};

export default CountryItem;
