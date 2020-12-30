/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ICountryObj } from '../interfaces/ICountryObj';

const InfoTableRowStyled = styled.tr`
  th {
    text-align: left;
  }
  > * {
    padding: 10px;
  }
`;

type InfoTableRowProps = {
  obj: ICountryObj,
  itemName: string,
  customValue?: string
};

function InfoTableRow({
  obj,
  itemName,
  customValue,
}: InfoTableRowProps) {
  return (
    <InfoTableRowStyled key={itemName}>
      <th scope="row">
        <span>{itemName}</span>
      </th>
      <td>
        <span>
          { (!customValue ? obj[itemName] : customValue) || 'Loading...' }
        </span>
      </td>
    </InfoTableRowStyled>
  );
}

InfoTableRow.propTypes = {
  obj: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  itemName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  customValue: PropTypes.any, // Временное
};

export default InfoTableRow;
