import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <h1>가장 최상위 root 컴포넌트</h1>

      <Outlet />
    </div>
  )
}
