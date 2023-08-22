import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/globalStyles';
import MovieView from './pages/MovieView';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <MovieView title="harry potter" />
    </div>
  );
}

export default App;
