import React from 'react';
import PropType from 'prop-types';
import useForm from '../../hooks/useForm';
import SearchBarForm from './SearchBarForm';
import TextInput from '../Input/TextInput';
import SearchBarButton from './SearchBarButton';

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
      <SearchBarButton />
    </SearchBarForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropType.func,
};

export default SearchBar;
