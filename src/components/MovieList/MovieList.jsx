import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import MovieListItem from './MovieListItem';

const MovieListStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

export default function MovieList({ title }) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pageRef = useRef(0);
  const observeRef = useRef(null);

  async function fetchMovieList(pageNumber) {
    setIsLoading(true);

    const data = await directFetchMovieList(title, pageNumber);

    if (data.Response === 'True') {
      setMovieList((prev) => [...prev, ...data.Search]);
      pageRef.current = pageNumber;
    } else {
      console.error('API 오류:', data.Error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        const nextPage = pageRef.current + 1;
        await fetchMovieList(nextPage);

        observer.observe(entry.target);
      }
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0 });
    observer.observe(observeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div css={MovieListStyle}>
        {movieList.length > 0 ? (
          movieList.map((movieListItem) => (
            <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
          ))
        ) : (
          <p>No movies were found.</p>
        )}
      </div>
      <div ref={observeRef} style={{ height: '100px' }}>
        {isLoading && '로딩 중'}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string,
};

async function directFetchMovieList(title, pageNumber) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=7035c60c&s=${title}&page=${pageNumber}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('movie list를 fetching 하는 단계에서 에러 발생:', error);
  }
}
