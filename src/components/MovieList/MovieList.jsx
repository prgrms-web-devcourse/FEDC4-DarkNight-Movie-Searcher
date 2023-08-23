import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import MovieListItem from './MovieListItem';
import useMovieList from '../../hooks/useMovieList';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const MovieListStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

const LoadingStyle = css`
  height: 100px;
`;

export default function MovieList({ title }) {
  const { movieList, isLoading, pageRef, fetchMovieList } = useMovieList(title);

  const observeRef = useInfiniteScroll({
    handleChange: async () => {
      await fetchMovieList(pageRef.current + 1);
    },
    threhold: 0,
  });

  return (
    <div>
      <div css={MovieListStyle}>
        {movieList.length > 0 ? (
          movieList.map((movieListItem) => (
            <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
          ))
        ) : (
          <p>No movies were found.</p>
        )}
      </div>
      <div ref={observeRef} css={LoadingStyle}>
        {isLoading && '로딩 중'}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string,
};
