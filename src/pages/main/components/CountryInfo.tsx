/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { FavoriteCountriesContext } from '../Main';
import InfoTableRow from './InfoTableRow';
import { ICountryObj } from '../interfaces/ICountryObj';

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

type CountryInfoTypes = {
  countries: {[index: string]: ICountryObj},
  match: any
}

function CountryInfo({ countries, match }: CountryInfoTypes) {
  const { alpha3Code } = match.params;
  const [country, setCountry] = useState<ICountryObj>();
  const [isFavorite, setIsFavorite] = useState(false);

  const context = useContext(FavoriteCountriesContext);

  function findCountry() {
    setCountry(countries[alpha3Code]);
  }

  useEffect(() => {
    if (countries) {
      findCountry();
    }
    if (country && context.favorites.has(country.alpha3Code)) {
      setIsFavorite(true);
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
          { country && generateRows(country) }
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

export default CountryInfo;
