import React from 'react';
import './App.css';
import ButtersBlinking from '../components/ButtersBlinking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <ButtersBlinking frameCount={1} frameRate={3} />
    </div>
  );
}

export default App;
