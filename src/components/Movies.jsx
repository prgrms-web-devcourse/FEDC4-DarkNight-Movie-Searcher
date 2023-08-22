import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies() {
  const params = 5; // 5번영화 선택 
  return (
    <div>
      <Link to={`/movies/${params}`}>클릭</Link>
    </div>
  )
}
