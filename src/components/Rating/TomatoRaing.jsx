import React, { useMemo } from 'react';
import tomato_score_fresh from './images/tomato_score_fresh.png';
import tomato_score_rotten from './images/tomato_score_rotten.png';
import PropsTypes from 'prop-types';
import styled from '@emotion/styled';
const RatingWrraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const TomatoRate = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
const TomatoRating = ({ value }) => {
  const tomatoRate = useMemo(() => {
    return parseInt(value) >= 59 ? tomato_score_fresh : tomato_score_rotten;
  });
  return (
    <RatingWrraper>
      <span>{value}</span>
      <TomatoRate src={tomatoRate} alt="tomato" />
    </RatingWrraper>
  );
};
TomatoRating.propTypes = {
  value: PropsTypes.string,
};
export default TomatoRating;
