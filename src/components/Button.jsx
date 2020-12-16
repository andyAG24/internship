import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  width: 100%;  
  padding: 10px;
  margin-top: 10px;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: .3s;
  :hover {
    cursor: pointer;
    background-color: #ccc;
  }  
  :disabled {
    cursor: not-allowed;
  }
`;

function Button({
  disabled = false,
  onClick = null,
  title = 'Click',
}) {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>{title}</ButtonWrapper>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
