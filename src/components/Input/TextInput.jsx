import React from 'react';
import styled from '@emotion/styled';

const TextInputStyle = styled.input`
  display: block;
  padding: 8px 10px;
  width: 100%;
  height: auto;
  font-size: inherit;
  color: inherit;
  border: none;
  background: none;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const TextInput = (props) => (
  <TextInputStyle type="text" autoComplete="off" {...props} />
);

export default TextInput;
