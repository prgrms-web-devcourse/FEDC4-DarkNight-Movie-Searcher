import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled';
import TextInput from '../Input/TextInput';
import useForm from '../../hooks/useForm';

const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 20px;
  color: #ffd26b;
  border-radius: 24px;
  background-color: #222;

  &:focus-within {
    border: 1px solid #333;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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
      />
      {errors.title && <p>{errors.title}</p>}
    </SearchBarForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropType.func,
};

export default SearchBar;
