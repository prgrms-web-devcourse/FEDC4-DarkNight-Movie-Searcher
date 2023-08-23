import React from 'react';
import styled from '@emotion/styled';
import StarRating from '../Rating/StarRating';
import TomatoRating from '../Rating/TomatoRaing';
import { palette } from '../../assets/stylesConstants';
import PropTypes from 'prop-types';
const InformationList = styled.ul`
  width: 100%;
  line-height: 1.5;
  font-size: 20px;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${palette.backgroundColor};
  color: ${palette.themeColor};
`;

const InformationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 24px;
  h2 {
    font-size: 24px;
    font-weight: bolder;
  }
  a {
    transition: all 0.1s;
  }
  a:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }

  p {
    text-align: left;
  }
`;
const MovieInformation = ({ movie }) => {
  return (
    <InformationList>
      <InformationItem>
        <h2>제목</h2>
        {movie.Title}
      </InformationItem>
      <InformationItem>
        <h2>개봉일</h2>
        {movie.Released}
      </InformationItem>
      <InformationItem>
        <h2>감독</h2>
        <a
          href={`https://www.google.com/search?q=${movie.Director}`}
          target="_blank"
          rel="noreferrer"
        >
          {movie.Director}
        </a>
      </InformationItem>
      <InformationItem>
        <h2>작가</h2>
        <a
          href={`https://www.google.com/search?q=${movie.Writer}`}
          target="_blank"
          rel="noreferrer"
        >
          {movie.Writer}
        </a>
      </InformationItem>
      <InformationItem>
        <h2>배우</h2>
        {movie.Actors &&
          movie.Actors.split(', ').map((actor) => (
            <a
              key={actor}
              href={`https://www.google.com/search?q=${actor}`}
              target="_blank"
              rel="noreferrer"
            >
              {actor}
            </a>
          ))}
      </InformationItem>
      <InformationItem>
        <h2>수상</h2>
        {movie.Awards}
      </InformationItem>
      <InformationItem>
        <h2>국가</h2>
        {movie.Country}
      </InformationItem>
      {movie.Ratings && (
        <InformationItem>
          <h2>평점</h2>
          <div>
            {movie.Ratings[0] && <StarRating value={movie.Ratings[0].Value} />}
          </div>
          <div>
            {movie.Ratings[1] && (
              <TomatoRating value={movie.Ratings[1].Value} />
            )}
          </div>
        </InformationItem>
      )}

      <InformationItem>
        <h2>박스오피스</h2>
        {movie.BoxOffice}
      </InformationItem>
      <InformationItem>
        <h2>줄거리</h2>
        <p>{movie.Plot}</p>
      </InformationItem>
    </InformationList>
  );
};

MovieInformation.propTypes = {
  movie: PropTypes.object,
};

export default MovieInformation;
