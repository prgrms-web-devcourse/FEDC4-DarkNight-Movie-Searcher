import React from 'react';
import { css } from '@emotion/react';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import { useMovies } from '../contexts/MovieProvider';
import { palette } from '../assets/stylesConstants';

export default function MovieView() {
  const { setTitle } = useMovies();

  return (
    <div css={PageStyle}>
      <SearchBar
        onSubmit={({ search }) => {
          setTitle(search);
        }}
      />
      <MovieList />
    </div>
  );
}

const PageStyle = css`
  background-color: ${palette.backgroundColor};
  min-height: 100vh;
`;
