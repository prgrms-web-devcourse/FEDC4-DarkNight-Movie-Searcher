import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function MovieDetail() {
  const { movieID } = useOutletContext();
  return (
    <div>
      선택한 영화 번호 - { movieID }
    </div>
  )
}
