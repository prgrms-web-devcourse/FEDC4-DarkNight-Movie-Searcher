import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';

const PAGE_NUMBER = 1;

export default function MovieList({ title }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7035c60c&s=${title}&page=${PAGE_NUMBER}`
        );
        const data = await response.json();
        setMovieList(data.Search);
      } catch (error) {
        console.error('movie list를 fetching 하는 단계에서 에러 발생 :', error);
      }
    }
    fetchMovieList();
  }, [title]);

  return <div>{JSON.stringify(movieList)}</div>;
}
MovieList.propTypes = {
  title: PropsTypes.string,
};
