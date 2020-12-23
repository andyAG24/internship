/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { FavoriteCountriesContext } from '../Main';
import InfoTableRow from './InfoTableRow';

const utils = require('utils/Utils');

const InfoTable = styled.table`
  border-radius: 20px;
  border: 1px solid #ccc;
  max-width: 50vw;
  margin: auto;
  box-shadow: 0px 1px 5px 0px black;
`;

const InfoTableHead = styled.thead`
  td {
    padding-bottom: 15px;
  }
  h1 {
    margin-bottom: unset;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.img`
  flex-grow: 1;
  width: 70px;
  margin-left: 20px;
  margin-top: 20px;
`;

const CountryName = styled.div`
  flex-grow: 10;
`;

const LayoutWrapper = styled.div``;

function CountryInfo({ countries = {}, match = undefined }) {
  const { alpha3Code } = match.params;
  const [country, setCountry] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const context = useContext(FavoriteCountriesContext);

  function findCountry() {
    setCountry(countries[alpha3Code]);
  }

  useEffect(() => {
    if (countries && countries.length !== 0) {
      findCountry();
    }
    if (country && context.favorites.has(country.alpha3Code)) {
      setIsFavorite(true);
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

  function renderAddToFavButton() {
    return !isFavorite
      ? (
        <Button
          title="Добавить в избранное"
          onClick={() => {
            context.setFavorites(country.alpha3Code);
            setIsFavorite(true);
          }}
        />
      ) : (
        <Button
          title="Убрать из избранного"
          onClick={() => {
            context.removeFavorites(country.alpha3Code);
            setIsFavorite(false);
          }}
        />
      );
  }

  function renderCountryInfo() {
    return (
      <InfoTable>
        <InfoTableHead>
          <tr>
            <td colSpan="2">
              <TitleWrapper>
                <CountryFlag src={country.flag} alt="Flag" />
                <CountryName>
                  <h1>{country.name}</h1>
                  <span>{country.nativeName}</span>
                </CountryName>
              </TitleWrapper>
              { renderAddToFavButton() }
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
