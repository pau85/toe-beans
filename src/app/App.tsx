import React from 'react';
import './App.css';
// import ButtersBlinkingSlow from '../components/ButtersBlinkingSlow';
// import ButtersBlinkingQuick from '../components/ButtersBlinkingQuick';
import ButtersSleeping from '../components/ButtersSleeping'
import ButtersBreathingSleepingTorso from '../components/ButtersBreathingSleepingTorso';

function App() {
  return (
    <div className="App">
      {/* <ButtersBlinkingSlow frameCount={4} frameRate={3} /> */}
      {/* <ButtersBlinkingQuick frameCount={4} frameRate={3} /> */}
      <div>
        <div className='butters-sleeping'>
          <ButtersSleeping />
        </div>
        <div className='butters-breathing-sleeping-torso'>
          <ButtersBreathingSleepingTorso />
        </div>
      </div>

    </div>
  );
}

export default App;
