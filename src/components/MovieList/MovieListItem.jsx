import React from 'react';
import PropTypes from 'prop-types';
import { useMovies } from '../../contexts/MovieProvider';
import styled from '@emotion/styled';

import { Highlight, Text } from '../../assets/commonstyles';

const MovieListItem = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  const { getMovieDetail } = useMovies();

  async function onClickMovieListItem(id) {
    await getMovieDetail(id);
  }

  const Item = styled.div`
    width: 18%;
    @media (max-width: 1280px) {
      width: 30%;
    }
    @media (max-width: 720px) {
      width: 48%;
    }
  `;

  const Image = styled.img`
    object-fit: cover;
    transition: transform 0.2s;
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.1);
    }
  `;

  const ImageContainer = styled.div`
    height: 400px;
    width: 100%;
    overflow: hidden;
    text-align: center;
  `;

  return (
    <Item onClick={() => onClickMovieListItem(imdbID)}>
      <ImageContainer>
        <Image src={Poster} alt={Title} />
      </ImageContainer>
      <Highlight>{Title}</Highlight>
      <Text>{Year}</Text>
      <Text>{Type}</Text>
    </Item>
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
