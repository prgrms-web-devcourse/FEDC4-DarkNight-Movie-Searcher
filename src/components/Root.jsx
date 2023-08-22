import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
        {/* 고정 */}
      <header>
        <form>
          <input type="text" />
          <button>버튼</button>
        </form>
      </header>
      {/* 고정 */}
      <Outlet />
    </div>
  )
}
