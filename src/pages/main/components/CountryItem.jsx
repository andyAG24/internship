import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
}) {
  return (
    <CountryItemWrapper key={name} onClick={onClick}>
      <CountryFlag src={flag} alt='Country flag' />
      <CountryName>{name}</CountryName>
    </CountryItemWrapper>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  onClick: PropTypes.func,
};

CountryItem.defaultProps = {
  name: undefined,
  flag: undefined,
  onClick: undefined,
};

export default CountryItem;
