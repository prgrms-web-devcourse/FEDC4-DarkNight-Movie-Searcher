import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (inputValue.length > 2) {
      fetch(`https://omdbapi.com?apikey=7035c60c&s=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data);
        });
    }
  }, [inputValue]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>버튼</button>
      </form>
      <Outlet context={movies} />
    </div>
  );
}

//  1. 메인에다가
