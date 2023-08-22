import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { movieID } = useParams();
  return <div>선택한 영화 번호 - {movieID}</div>;
}
