import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { movieRouter } from './routes/movieRouter';

const router = movieRouter;
function App() {
  return <RouterProvider router={ router }/>
}

export default App;
