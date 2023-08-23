import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { movieContext } from '../../App';
import StarRating from '../Rating/StarRating';
import TomatoRating from '../Rating/TomatoRaing';
import { palette } from '../../assets/stylesConstants';

const InformationList = styled.ul`
  width: 100%;
  line-height: 1.5;
  font-size: 20px;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  gap: 10px;
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
const MovieInformation = () => {
  const movieDetail = useContext(movieContext);
  return (
    <InformationList>
      <InformationItem>
        <h2>제목</h2>
        {movieDetail.Title}
      </InformationItem>
      <InformationItem>
        <h2>개봉일</h2>
        {movieDetail.Released}
      </InformationItem>
      <InformationItem>
        <h2>감독</h2>
        <a
          href={`https://www.google.com/search?q=${movieDetail.Director}`}
          target="_blank"
          rel="noreferrer"
        >
          {movieDetail.Director}
        </a>
      </InformationItem>
      <InformationItem>
        <h2>작가</h2>
        <a
          href={`https://www.google.com/search?q=${movieDetail.Writer}`}
          target="_blank"
          rel="noreferrer"
        >
          {movieDetail.Writer}
        </a>
      </InformationItem>
      <InformationItem>
        <h2>배우</h2>
        {movieDetail.Actors &&
          movieDetail.Actors.split(', ').map((actor) => (
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
        {movieDetail.Awards}
      </InformationItem>
      <InformationItem>
        <h2>국가</h2>
        {movieDetail.Country}
      </InformationItem>
      {movieDetail.Ratings && (
        <InformationItem>
          <h2>평점</h2>
          <div>
            {movieDetail.Ratings[0] && (
              <StarRating value={movieDetail.Ratings[0].Value} />
            )}
          </div>
          <div>
            {movieDetail.Ratings[1] && (
              <TomatoRating value={movieDetail.Ratings[1].Value} />
            )}
          </div>
        </InformationItem>
      )}

      <InformationItem>
        <h2>박스오피스</h2>
        {movieDetail.BoxOffice}
      </InformationItem>
      <InformationItem>
        <h2>줄거리</h2>
        <p>{movieDetail.Plot}</p>
      </InformationItem>
    </InformationList>
  );
};

export default MovieInformation;
