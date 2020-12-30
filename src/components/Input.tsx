/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
  }
  label {
    color: #656565;
    width: min-content;
    padding-left: 5px;
    padding-bottom: 2px;
  }
`;

type InputProps = {
  label?: string,
  placeholder?: string,
  value?: string,
  type?: string,
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
};

function Input({
  label,
  placeholder,
  value,
  type,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      { label
        && <label>{label}</label>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </InputWrapper>
  );
}

export default Input;
