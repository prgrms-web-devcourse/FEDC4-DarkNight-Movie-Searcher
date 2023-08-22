import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <form>
        <input type="text" />
        <button>버튼</button>
      </form>

      {/* movies */}
      {/* 여기서 click하면 나오는 id값을 
      밑에 1대신 넣으면 됨.
      */}
      <Outlet 
      context = {
        {
          movieID : 1
        }
      }
      />
    </div>
  )
}
