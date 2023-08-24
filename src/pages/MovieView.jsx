import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import { useMovies } from '../contexts/MovieProvider';
import { css } from '@emotion/react';
import { palette } from '../assets/stylesConstants';
export default function MovieView() {
  const { setTitle } = useMovies();

  const PageStyle = css`
    background-color: ${palette.backgroundColor};
    min-height: 100vh;
  `;
  return (
    <div css={PageStyle}>
      <SearchBar
        onSubmit={async ({ search }) => {
          await setTitle(search);
        }}
      />
      <MovieList />
    </div>
  );
}
