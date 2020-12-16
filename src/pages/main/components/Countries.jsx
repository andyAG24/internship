import React from 'react';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

function Countries({ countries }) {
  function renderCountries() {
    return Object.keys(countries).map((item) => (
      <CountryItem
        name={countries[item].name}
        key={countries[item].name}
        flag={countries[item].flag}
        alpha3Code={countries[item].alpha3Code}
      />
    ));
  }

  return (
    <>
      { Object.keys(countries).length !== 0 && renderCountries() }
    </>
  );
}

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

export default Countries;
