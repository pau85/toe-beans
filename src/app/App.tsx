import React from 'react';
import '../styles/App.scss';
import ButtersSleeping from '../components/characters/butters/buttersSleepingModule/ButtersSleeping';
// import ClockWithHands from '../components/items/clockwithands/ClockWithHands';
import LivingRoom from '../components/backgroundImages/LivingRoom';
import DiningRoom from '../components/backgroundImages/DiningRoom'
import ButtersBreathingSleepingTorso from '../components/characters/butters/buttersSleepingModule/ButtersBreathingSleepingTorso';
import { SunlightService } from '../services/sunlightService/SunlightService';

function App() {

  const sunlightService = new SunlightService(5)

  return (
    <div>
      {/* <div className="clock-item">
        <ClockWithHands />
      </div> */}
      <div className="livingroom">
        <LivingRoom />
      </div>
      <div className="diningroom">
        <DiningRoom />
      </div>
      <div className="butters-character-breathing">
        <ButtersBreathingSleepingTorso />
      </div>
      <div className="butters-character-sleeping">
        <ButtersSleeping />
      </div>
    </div>
  );
}

export default App;
