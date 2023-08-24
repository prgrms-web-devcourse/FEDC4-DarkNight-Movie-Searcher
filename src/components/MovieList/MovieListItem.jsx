import React from 'react';
import PropTypes from 'prop-types';
import { useMovies } from '../../contexts/MovieProvider';

const MovieListItem = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  const { getMovieDetail } = useMovies();

  async function onClickMovieListItem(id) {
    await getMovieDetail(id);
  }

  return (
    <div onClick={() => onClickMovieListItem(imdbID)}>
      <img src={Poster} alt={Title} />
      <p>{Title}</p>
      <p>{Year}</p>
      <p>{imdbID}</p>
      <p>{Type}</p>
    </div>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }),
};
