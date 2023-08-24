import React from 'react';
import { createContext, useContext, useState } from 'react';
import PropType from 'prop-types';
import { getMovie, getMovies } from '../api/movie';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const searchMovies = async ({ page }) => {
    try {
      if (!title) {
        setMovies([]);
        return;
      }
      const response = await getMovies({ title, page });
      if (response.Response === 'True') {
        if (page === 1) setMovies([...response.Search]);
        else setMovies([...movies, ...response.Search]);
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
    console.log('받은 id >> ', id);
    try {
      const response = await getMovie(id);
      if (response.Response === 'True') {
        console.log(response);
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
        title,
        setTitle,
        movies,
        setMovies,
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
