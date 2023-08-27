import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; //  useNavigate괄호안 import에 추가하시면 됩니다.
import { globalStyles } from '../assets/globalStyles';
import { useMovies } from '../contexts/MovieProvider';
import { Global } from '@emotion/react';
import SearchBar from '../components/SearchBar/SearchBar';
import { css } from '@emotion/react';
import { palette } from '../assets/stylesConstants';

export default function Root() {
  const navigate = useNavigate();
  const { setTitle } = useMovies();

  return (
    <div css={Container}>
      <Global styles={globalStyles} />
      <SearchBar
        onSubmit={({ search }) => {
          navigate('/');
          setTitle(search);
        }}
      />
      <Outlet />
    </div>
  );
}

const Container = css`
  background-color: ${palette.backgroundColor};
`;
