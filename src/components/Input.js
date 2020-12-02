import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
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

function Input(props) {
    return (
        <InputWrapper>
            { props.label && props.label !== '' && 
                <label>{props.label}</label>
            }
            <input placeholder={props.placeholder} value={props.value}
                type={props.type} onChange={props.onChange}></input>
        </InputWrapper>
    );
}

// Input = styled.div`
//     font-size: 20px;
// `;

export default Input;