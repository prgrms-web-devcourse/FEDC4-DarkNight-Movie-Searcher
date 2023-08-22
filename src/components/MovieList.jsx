import React, { useEffect, useState } from 'react';

const PAGE_NUMBER = 1;

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7035c60c&s=cat&page=${PAGE_NUMBER}`
        );
        const data = await response.json();
        setMovieList(data.Search);
      } catch (error) {
        console.error('movie list를 fetching 하는 단계에서 에러 발생 :', error);
      }
    }
    fetchMovieList();
  }, []);

  return <div>{JSON.stringify(movieList)}</div>;
}
