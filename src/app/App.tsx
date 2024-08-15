import React from 'react';
import '../styles/App.scss';
// import ButtersBlinkingSlow from '../components/butters/ButtersBlinkingSlow';
// import ButtersBlinkingQuick from '../components/butters/ButtersBlinkingQuick';
import ButtersSleeping from '../components/butters/ButtersSleeping'
import ButtersBreathingSleepingTorso from '../components/butters/ButtersBreathingSleepingTorso';
//import ClockWithHands from '../components/items/clockwithands/ClockWithHands';

function App() {
  return (
    <div>
      <div>
        <div className='butters-sleeping'>
          <ButtersSleeping />
        </div>        
        <div className='butters-breathing-sleeping-torso'>
          <ButtersBreathingSleepingTorso />
        </div>
        {/* <div className='clock-with-hands'>
          <ClockWithHands />
        </div> */}
      </div>
      <div>
        {/* <div className='butters-blinking-slow'>
          <ButtersBlinkingSlow frameCount={4} frameRate={3} />
        </div>
        <div className='butters-blinking-quick'>
          <ButtersBlinkingQuick frameCount={4} frameRate={3} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
