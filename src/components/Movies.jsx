import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { useOutletContext } from 'react-router-dom';

export default function Movies() {
  const { movies } = useContext(MovieContext);
  const clickID = useOutletContext();

  return (
    <div>
      {
        // null || key가 2개면 빈 배열
        movies === null || Object.keys(movies).length === 2
          ? []
          : movies.Search.map(({ imdbID, Title, Year }) => (
              <li
                key={imdbID}
                onClick={() => {
                  clickID(imdbID);
                }}
              >
                <h2>{Title}</h2>
                <p>{Year}</p>
              </li>
            ))
      }
    </div>
  );
}
