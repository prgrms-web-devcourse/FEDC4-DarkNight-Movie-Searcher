import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useMovies } from '../contexts/MovieProvider';
export default function useMovieList() {
  const { searchMovies, title } = useMovies();
  const [isLoading, setIsLoading] = useState(false);

  const pageRef = useRef(0);

  const setMovieList = async ({ nextPage }) => {
    if (title === '') return;

    setIsLoading(true);

    await searchMovies({ page: nextPage });

    pageRef.current = nextPage;

    setIsLoading(false);
  };

  const onClickLoadButton = async () => {
    await setMovieList({ nextPage: pageRef.current + 1 });
  };

  useEffect(() => {
    setMovieList({ nextPage: 1 });
  }, [title]);

  return {
    isLoading,
    pageRef,
    onClickLoadButton,
  };
}
