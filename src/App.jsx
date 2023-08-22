import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/globalStyles';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <MovieList />
    </div>
  );
}

export default App;
