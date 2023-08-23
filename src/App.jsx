import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/globalStyles';
import MovieProvider from './contexts/MovieProvider';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Global styles={globalStyles} />
      </div>
    </MovieProvider>
  );
}

export default App;
