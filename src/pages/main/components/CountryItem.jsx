import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CountryFlag = styled.img`
  width: 20px;
`;

const CountryName = styled.span`
  font-size: .9em;
`;

function CountryItem({
  name,
  flag,
}) {
  return (
    <li key={name}>
      <CountryFlag src={flag} alt='Country flag' />
      <CountryName>{name}</CountryName>
    </li>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
};

CountryItem.defaultProps = {
  name: undefined,
  flag: undefined,
};

export default CountryItem;
