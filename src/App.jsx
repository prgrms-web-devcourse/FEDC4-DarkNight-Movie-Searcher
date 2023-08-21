import React from 'react';
import { Global } from '@emotion/react';
import './App.css';
import { globalStyles } from './assets/common';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyles} />
    </div>
  );
}

export default App;
