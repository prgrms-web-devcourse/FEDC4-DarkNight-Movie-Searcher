import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/globalStyles';
import MovieProvider from './contexts/MovieProvider';
import MovieView from './pages/MovieView';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Global styles={globalStyles} />
        <MovieView />
      </div>
    </MovieProvider>
  );
}

export default App;
