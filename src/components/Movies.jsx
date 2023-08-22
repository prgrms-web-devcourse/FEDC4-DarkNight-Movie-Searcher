import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Movies() {
  const { movies } = useOutletContext();
  const navigate = useNavigate();

  const navigation = (movieID) => {
    navigate(`/movies/${movieID}`);
  };
  console.log('movies', movies);
  return (
    <div>
      {movies &&
        movies.Search.map(({ imdbID, Title }) => (
          <li
            key={imdbID}
            onClick={() => {
              navigation(imdbID);
            }}
          >
            <h2>영화 {Title}</h2>
          </li>
        ))}
    </div>
  );
}
