import React from 'react';
import { ICountryObj } from 'pages/main/interfaces/ICountryObj';
import CountryItem from './CountryItem';

type CountriesTypes = {
  countries: {[index: string]: ICountryObj},
}

function Countries({ countries }: CountriesTypes) {
  return (
    <>
      { Object.keys(countries).map((item) => (
        <CountryItem
          name={countries[item].name}
          key={countries[item].name}
          flag={countries[item].flag}
          alpha3Code={countries[item].alpha3Code}
        />
      )) }
    </>
  );
}

export default Countries;
