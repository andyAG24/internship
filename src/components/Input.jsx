/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1em;
  }
  label {
    width: min-content;
    padding-left: 5px;
  }
`;

function Input({
  label, placeholder, value, type, onChange,
}) {
  return (
    <InputWrapper>
      { label
        && <label>{label}</label>}
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: null,
  placeholder: null,
  value: undefined,
  type: null,
  onChange: null,
};

export default Input;
