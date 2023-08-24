import React from 'react';
import styled from '@emotion/styled';
import MovieListItem from './MovieListItem';
import useMovieList from '../../hooks/useMovieList';
import { useMovies } from '../../contexts/MovieProvider';
import { palette } from '../../assets/stylesConstants';
import { Highlight } from '../../assets/commonstyles';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function MovieList() {
  const { movies } = useMovies();
  console.log(movies);
  const { isLoading, loadNextPageMovies } = useMovieList();

  const observeRef = useInfiniteScroll({
    handleChange: loadNextPageMovies,
    threhold: 1,
  });
  return (
    <Container>
      {movies.length > 0 ? (
        <div>
          <List>
            {movies.map((movieListItem) => (
              <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
            ))}
          </List>
          <Load ref={observeRef}>
            {isLoading && <Highlight>Loading...</Highlight>}
          </Load>
        </div>
      ) : (
        <Highlight>No movies were found.</Highlight>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  background-color: ${palette.backgroundColor};
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px 0;
`;

const Load = styled.div`
  height: 100px;
  line-height: 100px;
`;
