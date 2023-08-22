import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled';
import useForm from '../../hooks/useForm';
import SearchBarForm from './SearchBarForm';
import TextInput from '../Input/TextInput';
import SearchIcon from '../../assets/icons/SearchIcon';

const SearchBarButton = styled.button`
  position: absolute;
  right: 5px;
  outline: none;
  border: none;

  display: block;
  height: 46px;
  width: 46px;
  background-color: #888;
  border-radius: 50%;

  &:hover {
    background-color: #aaaaaa;
  }
`;

const SearchBar = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { title: '' },
    onSubmit,
    validate: ({ title }) => {
      const newErrors = {};
      if (!title) newErrors.title = 'Please enter the movie title';
      return newErrors;
    },
  });

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <TextInput
        name="search"
        placeholder="Please enter the movie name in English"
        onChange={handleChange}
        disabled={isLoading}
        css={{ marginRight: 32 }}
      />
      {errors.title && <p>{errors.title}</p>}
      <SearchBarButton type="submit">
        <SearchIcon size={'23px'} color="#333" />
      </SearchBarButton>
    </SearchBarForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropType.func,
};

export default SearchBar;
