import React from 'react';
import { css } from '@emotion/react';
import MovieList from '../components/MovieList/MovieList';
import { palette } from '../assets/stylesConstants';

export default function MovieView() {
  return (
    <div css={PageStyle}>
      <MovieList />
    </div>
  );
}

const PageStyle = css`
  background-color: ${palette.backgroundColor};
  min-height: 100vh;
`;
