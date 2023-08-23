import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

export default function Root() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null); // movies는 칠 때 마다 계속 변함....! => 계속 변하는거...!
  const [movieID, setMovieID] = useState(null); // 클릭한 영화 id
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);
  const clickID = (movieId) => {
    setMovieID(movieId); // 아이디 바뀔 때 마다...!
    navigate(`/movies/${movieId}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 🔴 movie detail 🔴
  useEffect(() => {
    fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieID}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
      });
  }, [movieID]);

  // 🔴 movie List 🔴
  useEffect(() => {
    const request = async () => {
      try {
        const res = await fetch(
          `https://omdbapi.com?apikey=7035c60c&s=${inputValue}`
        );
        if (res.ok) {
          const data = await res.json();
          if (Object.keys(data).length >= 3) {
            navigate('/');
          }
          setMovies(data);
        } else {
          throw new Error();
        }
      } catch (e) {
        throw new Error(e.message);
      }
    };
    request(); // 제발 호출좀하자...! 제발...!
  }, [inputValue]);
  return (
    // props로 안 넘겨도됨!!
    <MovieContext.Provider value={{ movies, movieDetail }}>
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button>클릭!</button>
        </form>
        <Outlet context={clickID} />
      </>
    </MovieContext.Provider>
  );
}
