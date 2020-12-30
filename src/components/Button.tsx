import React from 'react';
import styled from 'styled-components';

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

type ButtonProps = {
  disabled: boolean,
  onClick: (ev: React.MouseEvent) => void,
  title: string
};

function Button({
  disabled,
  onClick,
  title,
}: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>{title}</ButtonWrapper>
  );
}

export default Button;
