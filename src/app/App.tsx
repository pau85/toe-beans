import React from 'react';
import './App.css';
import ButtersBlinkingSlow from '../components/ButtersBlinkingSlow';
import ButtersBlinkingQuick from '../components/ButtersBlinkingQuick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <ButtersBlinkingSlow frameCount={4} frameRate={3} />
      <ButtersBlinkingQuick frameCount={4} frameRate={3} />
    </div>
  );
}

export default App;
