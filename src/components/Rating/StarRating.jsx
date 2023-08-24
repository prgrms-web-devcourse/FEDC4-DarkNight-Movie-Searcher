import React, { useMemo } from 'react';
import Proptypes from 'prop-types';
import styled from '@emotion/styled';

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StarBox = styled.div`
  position: relative;
  display: inline-block;
  .StarBox__baseStar,
  .StarBox__fillStar {
    margin: 0;
    padding: 0;
    letter-spacing: 0px;
  }
  .StarBox__baseStar {
    filter: invert();
  }

  .StarBox__fillStar {
    position: absolute;
    top: 0;
    overflow-x: hidden;
  }
`;
const StarRating = ({ value }) => {
  const starStyle = useMemo(() => {
    const score = value.split('/')[0] * 10;
    return { width: `${parseInt(score)}%` };
  }, [value]);
  return (
    <RatingWrapper>
      <span>{value}</span>
      <StarBox>
        <div className="StarBox__baseStar">⭐⭐⭐⭐⭐</div>
        <div className="StarBox__fillStar" style={starStyle}>
          ⭐⭐⭐⭐⭐
        </div>
      </StarBox>
    </RatingWrapper>
  );
};

StarRating.propTypes = {
  value: Proptypes.string,
};

export default StarRating;
