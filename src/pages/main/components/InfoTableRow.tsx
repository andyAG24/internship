/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
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

export default InfoTableRow;
