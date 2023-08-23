import React from 'react';
import { Outlet } from 'react-router-dom'; //  useNavigate괄호안 import에 추가하시면 됩니다.

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
    // props로 안 넘겨도됨!!
    <>
      <Outlet />
      {/* context={clickID}이 파라미터로
       */}
    </>
  );
}
