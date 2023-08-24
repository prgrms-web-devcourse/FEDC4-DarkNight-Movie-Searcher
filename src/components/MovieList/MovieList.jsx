import React from 'react';
import { css } from '@emotion/react';
import MovieListItem from './MovieListItem';
import useMovieList from '../../hooks/useMovieList';
// import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useMovies } from '../../contexts/MovieProvider';

const MovieListStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

const LoadStyle = css`
  height: 100px;
  line-height: 100px;
`;

export default function MovieList() {
  const { movies } = useMovies();
  const { isLoading, onClickButton } = useMovieList();

  return (
    <div>
      <>
        {movies.length > 0 ? (
          <div>
            <div css={MovieListStyle}>
              {movies.map((movieListItem) => (
                <MovieListItem
                  key={movieListItem.imdbID}
                  movie={movieListItem}
                />
              ))}
            </div>
            <div css={LoadStyle}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button onClick={onClickButton}>Load more</button>
              )}
            </div>
          </div>
        ) : (
          <p>No movies were found.</p>
        )}
      </>
    </div>
  );
}
