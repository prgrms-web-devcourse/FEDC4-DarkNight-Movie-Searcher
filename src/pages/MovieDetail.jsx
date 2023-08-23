import React, { useContext, useEffect, useMemo, useState } from 'react';
import { movieContext } from '../App';
import styled from '@emotion/styled';
import MovieInformation from '../components/MovieInformation/MovieInformation';
import { palette } from '../assets/stylesConstants';

const Page = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;
  background-color: ${palette.backgroundColor};
`;

const BackgroundPoster = styled.div`
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 200px);
`;

const MovieDetail = () => {
  const movieDetail = useContext(movieContext);
  const [positionY, setPositionY] = useState(0);
  const [movie, setMovie] = useState({});

  const NOT_AVILABLE_POSTER =
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX900.jpg';

  const onScroll = () => {
    setPositionY(window.scrollY);
  };
  useEffect(() => {
    setMovie(movieDetail);
  }, [movieDetail]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const checkedPoster = useMemo(() => {
    if (!movieDetail.Poster) return '';
    if (movieDetail.poster === 'N/A') return NOT_AVILABLE_POSTER;
    return movieDetail.Poster.replace('SX300', 'SX900');
  }, [movieDetail]);

  return (
    <Page>
      <BackgroundPoster
        poster={movie.Poster && checkedPoster}
        style={{ backgroundPositionY: positionY * -1 }}
      />
      <MovieInformation movie={movie} />
    </Page>
  );
};
export default MovieDetail;
