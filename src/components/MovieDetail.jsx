import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
  const { movieID } = useParams(); // /movie/:movieID로 접속 
  // 그래서 movieID의 속성을 따로 분해해서, 여기다가 id값을 넣음!
  return (
    <div>
      선택한 영화 번호 - { movieID }
    </div>
  )
}
