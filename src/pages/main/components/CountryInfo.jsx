/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FavoriteCountriesContext } from '../Main';
import InfoTableRow from './InfoTableRow';

const utils = require('utils/Utils');

const InfoTable = styled.table`
  border: 1px solid #a2a9b1;
  max-width: 50vw;
  margin: auto;
`;

const InfoTableHead = styled.thead`
  td {
    padding-bottom: 15px;
  }
  h1 {
    margin-bottom: unset;
  }
`;

const InfoTableRow1 = styled.tr`
  th {
    text-align: left;
  }
  > * {
    padding: 10px;
  }
`;

const LayoutWrapper = styled.div`

`;

const StarIcon = styled.img`

`;

function CountryInfo({ countries = {}, match = undefined }) {
  const { alpha3Code } = match.params;
  const [country, setCountry] = useState({});

  const context = useContext(FavoriteCountriesContext);

  function findCountry() {
    setCountry(countries[alpha3Code]);
  }

  useEffect(() => {
    if (countries && countries.length !== 0) {
      findCountry();
    }
  });

  function generateRows(obj) {
    const fields = Object.keys(obj);
    const elements = fields.map((itemName) => {
      let element;
      if (typeof (obj[itemName]) !== 'object') {
        element = (
          <InfoTableRow
            obj={obj}
            itemName={itemName}
          />
        );
      }
      if (Array.isArray(obj[itemName])) {
        if ((typeof (obj[itemName][0]) === 'string') || (typeof (obj[itemName][0]) === 'number')) {
          element = (
            <InfoTableRow
              obj={obj}
              itemName={itemName}
              customValue={utils.getListString(obj[itemName])}
            />
          );
        }
      }
      return element;
    });
    return elements;
  }

  function renderCountryInfo() {
    return (
      <InfoTable>
        <InfoTableHead>
          <tr>
            <td colSpan="2">
              <button
                type="submit"
                onClick={() => {
                  context.setFavorites(country.alpha3Code);
                }}
              >
                Add to favorites
              </button>
              <div>
                <h1>{country.name}</h1>
                <span>{country.nativeName}</span>
              </div>
            </td>
          </tr>
        </InfoTableHead>
        <tbody>
          { Object.keys(country).length !== 0 && generateRows(country) }
        </tbody>
      </InfoTable>
    );
  }

  return (
    <LayoutWrapper key="layout-wrapper">
      <Link to="/">Назад</Link>
      { country && renderCountryInfo() }
    </LayoutWrapper>
  );
}

CountryInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any, // Временное решение
  countries: PropTypes.objectOf(PropTypes.object),
};

export default CountryInfo;
