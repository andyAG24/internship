/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoTable = styled.table`
  border: 1px solid #a2a9b1;
  max-width: 50vw;
  margin: auto;
`;

const InfoTableRow = styled.tr`
  // border-top: 1px solid #a2a9b1;
  // display: flex;
  // flex-direction: row;
`;

const API_URL = 'https://restcountries.eu/rest/v2/all';

function CountryInfo({ match }) {
  const {
    params: { alpha3Code },
  } = match;
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [languages, setLanguages] = useState('');

  async function gettingCountries() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }

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
    if (countries.length === 0) gettingCountries();
    if (countries.length !== 0) findCountry();
    if (Object.keys(country) !== 0) getLanguagesString();
  });

  function renderCountryInfo() {
    // const keys = () => Object.keys(country).map((key, value) => (
    //   <div key={key}>{`${value + 1}: ${key}: ${country[key]}`}</div>
    // ));
    return (
      <InfoTable>
        <thead>
          <tr>
            <td colSpan="2">
              <h1>{country.name}</h1>
              <span>{country.nativeName}</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <InfoTableRow>
            <th scope="row">
              <span>Capital</span>
            </th>
            <td>
              <span>{`${country.capital} (latlng: ${country.latlng})`}</span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Languages</span>
            </th>
            <td>
              <span>
                {languages || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Alternative Spellings</span>
            </th>
            <td>
              <span>
                {`${country.altSpellings}` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Demonym</span>
            </th>
            <td>
              <span>
                {country.demonym || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Region</span>
            </th>
            <td>
              <span>
                {country.region || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Subregion</span>
            </th>
            <td>
              <span>
                {country.subregion || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Borders</span>
            </th>
            <td>
              <span>
                {`${country.borders}` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Area</span>
            </th>
            <td>
              <span>
                {`${country.area} km2` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Population</span>
            </th>
            <td>
              <span>
                {country.population || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Gini</span>
            </th>
            <td>
              <span>
                {country.gini || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Currencies</span>
            </th>
            <td>
              <span>
                Loading...
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Timezone</span>
            </th>
            <td>
              <span>
                {`${country.timezones}` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Calling Codes</span>
            </th>
            <td>
              <span>
                {`+${country.callingCodes}` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>ISO 3166 Code</span>
            </th>
            <td>
              <span>
                {country.alpha2Code || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Alpha3Code</span>
            </th>
            <td>
              <span>
                {country.alpha3Code || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Internet TLD</span>
            </th>
            <td>
              <span>
                {`${country.topLevelDomain}` || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
          <InfoTableRow>
            <th scope="row">
              <span>Numeric Code</span>
            </th>
            <td>
              <span>
                {country.numericCode || 'Loading...'}
              </span>
            </td>
          </InfoTableRow>
        </tbody>
      </InfoTable>
    );
  }

  return (
    <>
      <Link to="/main">Назад</Link>
      { country && renderCountryInfo() }
    </>
  );
}

CountryInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any, // Временное решение
};

CountryInfo.defaultProps = {
  match: undefined,
};

export default CountryInfo;
