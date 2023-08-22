import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" />
        <button>버튼</button>
      </form>
      <Outlet
        context={{
          movieID: 1,
        }}
      />
    </div>
  );
}

//  1. 메인에다가
