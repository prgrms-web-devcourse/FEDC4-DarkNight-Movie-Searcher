import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import Loading from './Loading';

export default function MovieDetail() {
  const { movieID } = useParams(); // url로 가든 click으로 가든 둘 다 있어!
  const { movieDetail } = useContext(MovieContext);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  // url로 바로들어갔을 때!!!
  // 차이점이 뭘까...!
  useEffect(() => {
    setLoading((prev) => !prev);
    if (movieID) {
      fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieID}`)
        .then((res) => res.json())
        .then((data) => {
          setDetail({ ...data });
        });
      setLoading((prev) => !prev);
    }
  }, []);
  return (
    <div>
      {movieDetail === null || Object.keys(movieDetail).length === 2 ? (
        <li>
          <img src={detail.Poster} alt={`${detail.Title}사진은 없습니다`}></img>
          <h2>{detail.Title}</h2>
          <p>{detail.Year}</p>
          <p>{detail.Actor}</p>
        </li>
      ) : (
        <li>
          <img
            src={movieDetail.Poster}
            alt={`${movieDetail.Title}사진은 없습니다`}
          ></img>
          <h2>{movieDetail.Title}</h2>
          <p>{movieDetail.Year}</p>
          <p>{movieDetail.Actor}</p>
        </li>
      )}
      {loading && <Loading />}
    </div>
  );
}
