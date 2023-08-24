import React from 'react';
import styled from '@emotion/styled';
import MovieListItem from './MovieListItem';
import useMovieList from '../../hooks/useMovieList';
import { useMovies } from '../../contexts/MovieProvider';
import { palette } from '../../assets/stylesConstants';
import { Highlight } from '../../assets/commonstyles';

export default function MovieList() {
  const { movies } = useMovies();
  const { isLoading, onClickLoadButton } = useMovieList();

  return (
    <Container>
      {movies.length > 0 ? (
        <div>
          <List>
            {movies.map((movieListItem) => (
              <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
            ))}
          </List>
          <Load>
            {isLoading ? (
              <Highlight>Loading...</Highlight>
            ) : (
              <Button onClick={onClickLoadButton}>Load more</Button>
            )}
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

const Button = styled.button`
  border: 1px solid ${palette.themeColor};
  background-color: ${palette.backgroundColor};
  color: ${palette.themeColor};
  font-weight: bold;
  width: 60%;
  padding: 12px;
`;
