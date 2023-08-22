import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/globalStyles';
import MovieView from './pages/MovieView';
import { MovieDetailsProvider } from './stores/detailsStore';
function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
      <MovieDetailsProvider>
        <MovieView title="harry potter" />
      </MovieDetailsProvider>
    </div>
  );
}

export default App;
