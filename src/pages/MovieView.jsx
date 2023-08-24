import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import { useMovies } from '../contexts/MovieProvider';
export default function MovieView() {
  const { setTitle } = useMovies();
  return (
    <>
      <SearchBar
        onSubmit={async ({ search }) => {
          await setTitle(search);
        }}
      />
      <MovieList />
    </>
  );
}
