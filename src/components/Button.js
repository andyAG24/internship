import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    width: 100%;  
    padding: 10px;
    margin-top: 10px;
    font-size: 1em;
    background: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: .3s;
    :hover {
        cursor: pointer;
        background-color: #ccc;
    }  
`;

function Button(props) {
    return (
        <ButtonWrapper onClick={props.onClick}>{props.title}</ButtonWrapper>
    );
}

export default Button;