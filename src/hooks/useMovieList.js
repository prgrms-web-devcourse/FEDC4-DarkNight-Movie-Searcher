import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useMovies } from '../contexts/MovieProvider';

export default function useMovieList() {
  const { searchMovies, title, totalPage } = useMovies();
  const [isLoading, setIsLoading] = useState(false);

  const pageRef = useRef(0);

  const setMovieList = async ({ nextPage }) => {
    setIsLoading(true);

    await searchMovies({ page: nextPage });

    pageRef.current = nextPage;

    setIsLoading(false);
  };

  const loadNextPageMovies = async () => {
    if (totalPage >= pageRef.current) {
      await setMovieList({ nextPage: pageRef.current + 1 });
    }
  };

  useEffect(() => {
    setMovieList({ nextPage: 1 });
  }, [title]);
  return {
    isLoading,
    pageRef,
    loadNextPageMovies,
  };
}
