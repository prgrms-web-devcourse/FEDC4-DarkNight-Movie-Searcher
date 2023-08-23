import React from 'react';
import PropType from 'prop-types';
import { css } from '@emotion/react';
import SearchIcon from '../../assets/icons/SearchIcon';

const ButtonStyle = css`
  position: absolute;
  right: 5px;
  outline: none;
  border: none;

  display: block;
  height: 46px;
  width: 46px;
  background-color: #888;
  border-radius: 50%;

  &:hover {
    background-color: #aaa;
  }
`;

const SearchBarButton = ({ size = '23px', color = '#333' }) => (
  <button type="submit" css={ButtonStyle}>
    <SearchIcon size={size} color={color} />
  </button>
);

SearchBarButton.propTypes = {
  size: PropType.string,
  color: PropType.string,
};

export default SearchBarButton;
