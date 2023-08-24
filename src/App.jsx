import React from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { movieRouter as router } from './routes/movieRouter';
import MovieProvider from './contexts/MovieProvider';

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
