import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  // const [movies, setMovies] = useState([])
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch(`https://omdbapi.com?apikey=7035c60c&s=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, inputValue);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>버튼</button>
      </form>
      <Outlet
        context={{
          movieID: 1,
        }}
      />
    </div>
  );
}

//  1. 메인에다가
