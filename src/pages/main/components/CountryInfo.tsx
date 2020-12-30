/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FavoriteCountriesContext } from '../Main';
import InfoTableRow from './InfoTableRow';
import { ICountryObj } from '../interfaces/ICountryObj';

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

type CountryInfoTypes = {
  countries: {[index: string]: ICountryObj},
  match: any
}

function CountryInfo({ countries, match }: CountryInfoTypes) {
  const { alpha3Code } = match.params;
  const [country, setCountry] = useState<ICountryObj>();

  const context = useContext(FavoriteCountriesContext);

  function findCountry() {
    setCountry(countries[alpha3Code]);
  }

  useEffect(() => {
    if (countries) {
      findCountry();
    }
  });

  function generateRows(countryObj: ICountryObj) {
    const fields = Object.keys(countryObj);
    const elements = fields.map((itemName: string) => {
      let element;
      if (Array.isArray(countryObj[itemName])) {
        if ((typeof (countryObj[itemName][0]) === 'string') || (typeof (countryObj[itemName][0]) === 'number')) {
          element = (
            <InfoTableRow
              obj={countryObj}
              itemName={itemName}
              customValue={utils.getListString(countryObj[itemName])}
            />
          );
        }
      } else {
        element = (
          <InfoTableRow
            obj={countryObj}
            itemName={itemName}
          />
        );
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
            <td colSpan={2}>
              <button
                type="submit"
                onClick={() => {
                  if (country) context.setFavorites(country.alpha3Code);
                }}
              >
                Add to favorites
              </button>
              <div>
                <h1>{ (country && country.name) || 'Loading...' }</h1>
                <span>{ (country && country.nativeName) || 'Loading...' }</span>
              </div>
            </td>
          </tr>
        </InfoTableHead>
        <tbody>
          { country && generateRows(country) }
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

export default CountryInfo;
