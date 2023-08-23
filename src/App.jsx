import React from 'react';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { movieRouter as router } from './routes/movieRouter';
function App() {
  return <RouterProvider router={router} />;
}

export default App;
