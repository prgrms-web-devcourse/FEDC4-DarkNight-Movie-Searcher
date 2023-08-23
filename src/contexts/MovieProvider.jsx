import React from 'react';
import { createContext, useContext, useState } from 'react';
import PropType from 'prop-types';
import { getMovie, getMovies } from '../api/movie';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const searchMovies = async ({ title, page }) => {
    try {
      const response = await getMovies({ title, page });
      if (response.Response === 'True') {
        setMovies([...movies, ...response.Search]);
        setTotalPage(
          Math.min(Math.ceil(Number(response.totalResults) / 10), 100)
        );
      } else {
        setErrorMessage(response.Error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieDetail = async (id) => {
    try {
      const response = await getMovie(id);
      if (response.Response === 'True') {
        setMovieDetail(response);
      } else {
        setErrorMessage(response.Error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        totalPage,
        movieDetail,
        errorMessage,
        searchMovies,
        getMovieDetail,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropType.node,
};

export default MovieProvider;
