import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled';
import TextInput from '../Input/TextInput';

const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 20px;
  color: #ffd26b;
  border-radius: 24px;
  background-color: #222;
  &:focus-within {
    border: 1px solid #333;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarForm onSubmit={onSubmit}>
      <TextInput
        name="search"
        placeholder="Please enter the movie name in English"
      />
    </SearchBarForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropType.func,
};

export default SearchBar;
