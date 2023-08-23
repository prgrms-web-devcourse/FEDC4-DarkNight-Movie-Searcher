import { useState, useRef, useCallback } from 'react';

export default function useMovieList(title) {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pageRef = useRef(0);

  const handleChange = useCallback(async (nextPage) => {
    setIsLoading(true);

    const data = await directFetchMovieList(title, nextPage);

    if (data.Response === 'True') {
      setMovieList((prev) => [...prev, ...data.Search]);
      pageRef.current = nextPage;
    } else {
      console.error('API 오류:', data.Error);
    }

    setIsLoading(false);
  });

  return {
    movieList,
    isLoading,
    pageRef,
    fetchMovieList: handleChange,
  };
}

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
