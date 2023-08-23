import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { InputContext } from '../context/InputContext';
import { useOutletContext } from 'react-router-dom';

export default function Movies() {
  // const navigate = useNavigate();
  console.log('movies');
  const { movies, movieID, movieData } = useContext(InputContext);
  console.log(movieData, movieID);
  // const navigation = (movieID) => {
  //   navigate(`/movies/${movieID}`);
  // };
  const onClick = useOutletContext();
  return (
    <div>
      {Array.isArray(movies) ||
        movies.Search.map(({ imdbID, Title }) => (
          <li
            key={imdbID}
            onClick={() => {
              // navigation(imdbID);
              onClick(imdbID);
            }}
          >
            <h2>영화 {Title}</h2>
          </li>
        ))}
    </div>
  );
}
