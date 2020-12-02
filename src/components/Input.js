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

function Input(props) {
    return (
        <InputWrapper>
            { props.label && 
                <label>{props.label}</label>
            }
            <input placeholder={props.placeholder} value={props.value}
                type={props.type} onChange={props.onChange}></input>
        </InputWrapper>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;