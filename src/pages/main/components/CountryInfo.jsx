/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  function findCountry() {
    setCountry(countries.find((item) => item.alpha3Code === alpha3Code));
  }

  function getListString(obj) {
    let output = '';
    obj.forEach((item) => {
      output += item;
      if (obj.indexOf(item) !== obj.length - 1) output += ', ';
    });
    return (output);
  }

  useEffect(() => {
    if (countries && countries.length !== 0) findCountry();
  });

  function generateChildRows(obj) {
    const elements = [];
    obj.forEach((elem) => {
      Object.keys(elem).forEach((key) => {
        const element = (elem[key] && elem[key].length !== 0) ? (
          <div>
            <span>{`${key}: `}</span>
            <span>{elem[key]}</span>
          </div>
        ) : (
          <>
          </>
        );
        elements.push(element);
      });
    });
    return elements;
  }

  function generateRows(obj) {
    const fields = Object.keys(obj);
    const elements = fields.map((item) => {
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
      if (Array.isArray(obj[item])) {
        if ((typeof (obj[item][0]) === 'string') || (typeof (obj[item][0]) === 'number')) {
          element = (
            <InfoTableRow key={item}>
              <th scope="row">
                <span>{item}</span>
              </th>
              <td>
                <span>
                  {getListString(obj[item]) || 'Loading...'}
                </span>
              </td>
            </InfoTableRow>
          );
        } else {
          element = (
            <InfoTableRow key={item}>
              <th scope="row">
                <span>{item}</span>
              </th>
              <td>
                { (obj[item] && generateChildRows(obj[item])) || 'Loading...' }
              </td>
            </InfoTableRow>
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
