/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoTableRowStyled = styled.tr`
  th {
    text-align: left;
  }
  > * {
    padding: 10px;
  }
`;

function InfoTableRow({
  obj,
  itemName,
  customValue,
}) {
  console.log(customValue, typeof (customValue));

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
