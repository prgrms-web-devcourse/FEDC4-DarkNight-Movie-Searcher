import React from 'react';
import PropsTypes from 'prop-types';
export default function MovieListItem({ movie }) {
  return (
    <div>
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>
      <p>{movie.Type}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

MovieListItem.propTypes = {
  movie: PropsTypes.shape({
    Title: PropsTypes.string,
    Year: PropsTypes.string,
    imdbID: PropsTypes.string,
    Type: PropsTypes.string,
    Poster: PropsTypes.string,
  }),
};
