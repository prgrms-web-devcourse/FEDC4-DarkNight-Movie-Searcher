import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { movieID } = useParams();
  const [selectedMovie, setSelectedMove] = useState(null);

  useEffect(() => {
    fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedMove(data);
      });
  }, []);
  return (
    <div>
      <h2>선택한 영화 번호 - {movieID}</h2>
      {selectedMovie &&
        selectedMovie.map(({ Title, Year, imdbID, Poster }) => (
          <li key={imdbID}>
            <img src={Poster} alt="" />
            <h2>{Title}</h2>
            <p>{Year}</p>
          </li>
        ))}
    </div>
  );
}

// url에 movieID파라미터로 넣고 fetch요청 하시면 됩니다!!!
// useEffect => []마운트 할 때로 놓고 요청하시면 됩니다!
