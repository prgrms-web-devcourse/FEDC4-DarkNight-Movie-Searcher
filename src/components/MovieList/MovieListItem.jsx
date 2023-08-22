import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieDetailsContext from '../../stores/detailsStore';
const MovieListItem = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  const context = useContext(MovieDetailsContext);
  const {
    actions: { setDetails },
    state: { details },
  } = context;

  async function onClickMovieListItem(id) {
    const data = await directFetchMovieDetails(id); // fetch details
    setDetails(data); // contextapi 추가
    console.log(details);

    // route 처리
  }
  return (
    <div onClick={() => onClickMovieListItem(imdbID)}>
      <p>{Title}</p>
      <p>{Year}</p>
      <p>{imdbID}</p>
      <p>{Type}</p>
      <img src={Poster} alt={Title} />
    </div>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }),
};

async function directFetchMovieDetails(id) {
  try {
    const response = await fetch(
      `https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('movie list를 fetching 하는 단계에서 에러 발생:', error);
  }
}
