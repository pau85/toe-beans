import React from 'react';
import './App.css';
// import ButtersBlinkingSlow from '../components/butters/ButtersBlinkingSlow';
//import ButtersBlinkingQuick from '../components/butters/ButtersBlinkingQuick';
import ButtersSleeping from '../components/butters/buttersSleepingModule/ButtersSleeping'
import ButtersBreathingSleepingTorso from '../components/butters/buttersSleepingModule/ButtersBreathingSleepingTorso';
import Butters, {ACTION_TYPES} from '../components/butters/Butters'

//import ClockWithHands from '../components/items/clockwithands/ClockWithHands';

function App() {
  return (
    <div>
        <div className='butters-blinking-quick'>
          <Butters action={ACTION_TYPES.BLINK} />
          {/* <ButtersBlinkingQuick frameCount={4} frameRate={3} /> */}
          {/* <ButtersSleeping /> */}
        </div> 
        {/* <div>
          <ButtersBreathingSleepingTorso />
        </div> */}
        </div>
  );
}

export default App;
