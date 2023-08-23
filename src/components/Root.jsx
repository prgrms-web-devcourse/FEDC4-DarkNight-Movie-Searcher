import React, { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { InputContext } from '../context/InputContext';

export default function Root() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [movieID, setMovieID] = useState('');
  const [movieData, setMovieData] = useState(null);
  const onClick = useCallback((id) => {
    console.log('누른 id >> ', id);
    setMovieID(id);
  });
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieID}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, [movieID]);
  useEffect(() => {
    if (inputValue.length > 2) {
      fetch(`https://omdbapi.com?apikey=7035c60c&s=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
        });
    }
  }, [inputValue]);
  return (
    // inputValue를 전달해주고 계속 여기서 변화시켜...!
    <InputContext.Provider value={{ movies, movieID, movieData }}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button>버튼</button>
        </form>
        <Outlet context={onClick} />
      </div>
    </InputContext.Provider>
  );
}

//  1. 메인에다가
