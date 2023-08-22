import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <form>
        <input type="text" />
        <button>버튼</button>
      </form>

      <Outlet />
    </div>
  )
}
