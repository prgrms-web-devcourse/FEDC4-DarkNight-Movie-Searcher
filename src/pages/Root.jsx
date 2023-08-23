import React from 'react';
import { Outlet } from 'react-router-dom'; //  useNavigate괄호안 import에 추가하시면 됩니다.
import { globalStyles } from './assets/globalStyles';
import MovieProvider from './contexts/MovieProvider';
import { Global } from '@emotion/react';

export default function Root() {
  // 🔴 movie List 🔴
  // useEffect(() => {
  // const request = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://omdbapi.com?apikey=7035c60c&s=${inputValue}`
  //     );
  //     if (res.ok) {
  //       const data = await res.json();
  //       if (Object.keys(data).length >= 3) {
  //         navigate('/'); =====================> 중간에 검색어를 입력할 때 글자가 3글자 이상이라면 바로 /로 넘어감.
  //       }
  //       setMovies(data);
  //     } else {
  //       throw new Error();
  //     }
  //   } catch (e) {
  //     throw new Error(e.message);
  //   }
  // };
  // request();
  // }, [inputValue]); => 의존성 배열안에는 input값
  return (
    <MovieProvider>
      {/* 여기에 form 컴포넌트 */}
      <Global styles={globalStyles} />
      <Outlet />
    </MovieProvider>
  );
}
