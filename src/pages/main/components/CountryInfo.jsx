/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from 'components';

const InfoTable = styled.table`
  border: 1px solid #a2a9b1;
  max-width: 50vw;
`;

const InfoTableHead = styled.thead`
  td {
    padding-bottom: 15px;
  }
  h1 {
    margin-bottom: unset;
  }
`;

const InfoTableRow = styled.tr`
  th {
    text-align: left;
  }
  > * {
    padding: 10px;
  }
`;

const LayoutWrapper = styled.div`

`;

function CountryInfo({ countries, match }) {
  const { alpha3Code } = match.params;
  const [country, setCountry] = useState({});
  const [languages, setLanguages] = useState('');

  function findCountry() {
    setCountry(countries.find((item) => item.alpha3Code === alpha3Code));
  }

  function getLanguagesString() {
    let outputLine = '';
    const languagesList = Object.keys(country).length !== 0
      ? Object.assign([], country.languages) : [];

    languagesList.forEach((item) => {
      outputLine += item.name;
      if (languagesList.indexOf(item) !== languagesList.length - 1) outputLine += ', ';
    });
    setLanguages(outputLine);
  }

  useEffect(() => {
    if (countries && countries.length !== 0) findCountry();
    if (country && Object.keys(country) !== 0) getLanguagesString();
  });

  function generateRows(obj) {
    const fields = Object.keys(obj);
    const kek = fields.map((item) => {
      let element;
      if (typeof (obj[item]) !== 'object') {
        element = (
          <InfoTableRow key={item}>
            <th scope="row">
              <span>{item}</span>
            </th>
            <td>
              <span>
                {obj[item] || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
        );
      }
      if ((typeof (obj[item]) !== 'string') && (typeof (obj[item]) !== 'number')) element = generateRows(obj[item]);
      return element;
    });
    return kek;
  }

  function renderCountryInfo() {
    return (
      <InfoTable>
        <InfoTableHead>
          <tr>
            <td colSpan="2">
              <h1>{country.name}</h1>
              <span>{country.nativeName}</span>
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
    <LayoutWrapper>
      <Link to="/">Назад</Link>
      { country && renderCountryInfo() }
    </LayoutWrapper>
  );
}

CountryInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any, // Временное решение
  countries: PropTypes.arrayOf(PropTypes.any),
};

CountryInfo.defaultProps = {
  match: undefined,
  countries: [],
};

export default CountryInfo;
